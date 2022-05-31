import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
    
    return (
        <Link to={`/movie/${movie.id}`} className='hover:z-50 shadow-lg hover:shadow-2xl'>
        <div className='relative hover:scale-110 hover:shadow-2xl transition-all ease-in-out delay-250'>
            <div className='movie-card flex flex-col bg-white rounded grow max-w-[350px] rounded-md shadow-2xl overflow-hidden' key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} key={movie.id} className="movie-image max-w-[350px] justify-self-center self-center object-contain "/>
                <h2 className='font-bold text-gray-900 text-2xl mb-3 p-3'>{movie.title}</h2>
                <p className='pl-3 text-gray-900'>Language: {movie.original_language}</p>
                
            </div>
            <div className='absolute top-[-15px] right-[-15px] z-5 items-center justify-center text-center rounded-full w-12 h-12 bg-blue-500'><div className='flex w-full h-full items-center justify-center'><span className='m-auto font-bold'>{movie.vote_average}</span></div></div> 
            </div>
        </Link>
    )
}
    