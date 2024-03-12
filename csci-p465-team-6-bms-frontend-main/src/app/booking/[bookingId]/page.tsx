'use client';

import React, { useEffect, useState } from 'react';
import Booking from '@/components/Booking';
// import { Row, Col } from 'reactstrap';
// import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

// import Loading from '../../components/Loading';
// import ErrorMessage from '../../components/ErrorMessage';
// import Highlight from '../../components/Highlight';

interface BookingPageProps {
  params: {
    bookingId: string
  }
}

export interface MovieDetailsProps {
  movieName: string,
  genre: string,
  director: string,
  duration: string,
  language: string,
  description: string,
  cast: string,
  id: number
}

interface MovieDetailsApiResponse {
  genre: string,
  title: string,
  director: string,
  duration: string,
  created_at: string,
  id: number,
  actor: string,
  language: string,
  description: string,
  updated_at: string
}

export default function Page({params: {bookingId}} : BookingPageProps) {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps>();
  const bookingUrl = 'http://127.0.0.1:8000/movies/';

  const getMovieDetails = async (id: string) => {
    const response = await fetch(bookingUrl + id, {method: 'get'})
    const data: MovieDetailsApiResponse = await response.json();
    const movieDetailsPaload: MovieDetailsProps = {
      movieName: data.title,
      genre: data.genre,
      director: data.director,
      duration: data.duration,
      language: data.language,
      description: data.description,
      cast: data.actor,
      id: data.id
    }
    setMovieDetails(movieDetailsPaload)
  }

  useEffect(() => {
      console.log("calling twice");
      getMovieDetails(bookingId);
  },[])
  return (
    <>
      <main className='p-3'>
        {movieDetails && <Booking {...movieDetails}/>}
      </main>
    </>
  );
}
