import React from 'react'
import { useParams } from 'react-router-dom'

export default function RandomMovie() {
    const {genre} = useParams();
  return (
    <div>{genre}</div>
  )
}
