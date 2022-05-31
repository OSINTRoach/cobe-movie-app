import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMovieByGenre, randomNumber} from '../../Helpers/getMovieByGenre';

export default function RandomMovies() {
  const navigate = useNavigate();
  const [genre, setGenre] = useState("")

  const onChange = (e) => {
    setGenre(e.target.value);
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    getMovieByGenre(genre)
    .then(res => res.json())
    .then(data => {
      console.log()
      navigate(`/movie/${data.results[randomNumber(19,0)].id}`)
    })
    
  }

  return (
    <div className='w-full flex flex-col justify-center items-center h-screen bg-[#030328]'>
      <div className='w-200px flex flex-col justify-center items-center bg-blue-500 p-20 rounded-lg shadow-lg'>
      <h1 className='text-3xl'>Random movie</h1>
      <p>Choose a genre</p>
      <form onSubmit={handleOnClick}>
      <div class="flex justify-center">
        <div>
          <div class="form-check">
            <input onChange={onChange} value="35" class="form-check-input appearance-none rounded-full h-4 w-4 border border-blue-600 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
              Comedy
            </label>
          </div>
          <div class="form-check">
            <input onChange={onChange} value="27" class="form-check-input appearance-none rounded-full h-4 w-4 border border-blue-600 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
              Horror
            </label>
          </div>
          <div class="form-check">
            <input onChange={onChange} value="18" class="form-check-input appearance-none rounded-full h-4 w-4 border border-blue-600 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
            <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault3">
              Drama
            </label>
          </div>
          <div class="form-check">
            <input onChange={onChange} value="28" class="form-check-input appearance-none rounded-full h-4 w-4 border border-blue-600 bg-white checked:bg-blue-600 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
            <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault4">
              Action
            </label>
          </div>
        </div>
        
      </div>
      <button type="submit" className='bold uppercase text-white p-3 m-3 bg-[#030328] rounded-full'>Get me a movie</button>
      </form>
      
      </div>
    </div>
  )
}
