import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import './MovieDetails.css'
import ReactStars from "react-rating-stars-component";

const API_KEY = process.env.REACT_APP_API_KEY

export default function MovieDetails(props) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const params = useParams();
  const url = `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=${API_KEY}`;

  const [rating, setRating] = useState(getRating());

  const starTemplate = {
    size: 40,
    count: 10,
    isHalf: false,
    value: rating,
    color: "white",
    activeColor: "yellow",
    changeRating: {changeRating},
    onChange: newValue => {
      changeRating(newValue)
    }
  };

  function changeRating(newRating){
    setRating(newRating);
    let movieRating = {
      value: newRating,
      movieId: params.movieID
    }
    localStorage.setItem(`${params.movieID}`, JSON.stringify(movieRating))
  }

  function getRating(){
    const newRating = JSON.parse(localStorage.getItem(`${params.movieID}`))
    console.log(newRating)
    if(newRating) return newRating.value
  }

  function fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMovie(data);
        setisLoading(false);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getRating();
    fetchData();
  }, []);

  return (
    <div className='bg-[#030328]'>
      <div className='w-full bg-[#030328] z-2'>
      <img src={`https://image.tmdb.org/t/p/500/${movie.backdrop_path}`} alt={movie.original_title} className='w-full opacity-50 object-cover absolute blur-md bg-center bg-cyan-500 gradient-mask-b-0'/>
        <img src={`https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces/${movie.backdrop_path}`} alt={movie.original_title} className='w-full opacity-50 object-cover absolute blur-s bg-center bg-cyan-500 gradient-mask-b-0'/>
      </div>
      {isLoading ? 
      <h1 className="flex items-center justify-center font-bold text-white text-4xl h-screen tracking-widest lg:text-7xl bg-opacity-50">LOADING...</h1> 
      : 
      <div className="custom-container z-10 p-5 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
            className="title-img w-[12rem] mb-2 rounded-md"
          />
          <h1 className='text-2xl'>{movie.original_title}</h1>
          <p className="details">{movie.tagline}</p>
          <p className="title-overview sm:w-3/5 lg:w-2/5">{movie.overview}</p>

          <div className="link-holder p-3 mb-3 bg-blue-500 inline-block rounded-full uppercase font-bold text-white shadow-sm hover:text-blue-500 border-2 border-blue-500 hover:bg-cyan-500/0  ">
            <a href={movie.homepage} className="custom-button">
              Visit website
            </a>
          </div>
          <div className="details">
            <ReactStars {...starTemplate}/>

            <h5>Audience score</h5>
            <p>{movie.vote_average}/10</p>

            <h5>Revenue</h5>
            <p>${movie.revenue?.toLocaleString("de-DE")}</p>

            <h5>Release date</h5>
            <p>{movie.release_date}</p>

            <h5>Budget</h5>
            <p>${movie.budget?.toLocaleString("de-DE")}</p>

            <h5>Rating</h5>
            <p>{movie.adult ? "18+" : "All ages"}</p>

            <h5>Genres</h5>
            <ul>
            {movie.genres?.map((genre) => (
              <li className='genres' key={genre.id}>{genre.name}</li>
            ))}
            </ul>

            <h5>Spoken Languages</h5>
            <div>
              <ul>
                {movie.spoken_languages?.map((spoken_languages) => (
                  <li key={spoken_languages.iso_639_1}>
                    {spoken_languages.english_name}
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </div> }
      
    </div>
  )
}

