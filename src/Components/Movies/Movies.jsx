import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { FaRandom } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies([...movies , ...data.results])
            setIsLoading(false)
            setPage((prevPage) => prevPage + 1)
        })
    }
    
    const nextPage = (e) => {
        e.preventDefault()
        fetchMovies()
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMovies();
    },[])
    
    
    return (
        <> 
            {isLoading ? 
                <h1 className="flex items-center justify-center font-bold text-white text-4xl h-screen tracking-widest lg:text-7xl bg-opacity-50">LOADING...</h1> 
                : 
                (<>
                    <div className='flex p-20 flex-wrap gap-5 justify-center items-center'>
                        {movies?.map(movie => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                    <button onClick={(e) => nextPage(e)} className="flex uppercase mx-auto hover:scale-110 transition ease-in-out delay-50 rounded-full shadow-md bg-blue-500 text-white font-bold text-2xl p-8 mb-4">Load more</button>
                    <Link to={`/random`}><div className='z-50 hover:scale-110 transition ease-in delay-50 cursor-pointer fixed bottom-4 right-4 bg-blue-500 p-8 rounded-full shadow-md'>
                        <FaRandom size={'1.5rem'}/>
                    </div>
                    </Link>    
                </>
                )
            } 
        </>
    )
}
            
            