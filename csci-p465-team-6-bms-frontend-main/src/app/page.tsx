'use client';
import './page.css';

import {Carousel, CarouselItem} from "react-bootstrap";
import React, { useState, useEffect } from 'react';

import SearchBar from '@/components/SearchBar'
import MovieCard from "@/components/MovieCard";
import LocationComponent from "@/components/LocationComponent"
import LocationComp from "@/components/LocationComp"
export default function Page() {

    const suggestions = ['Bloomington', 'Indianapolis', 'Chicago']

    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if the Geolocation API is supported
        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                err => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    console.log(location)

    return (
        <main style={{marginBottom: '1rem'}}>
            <div className="container-fluid p-0">
                <div className="row-fluid p-0">
                    <div className="card border-0">
                        <img className="card-img rounded-0" src="assets/theater1.jpg" draggable="false" alt="Movie theater."/>
                        <div className="card-img-overlay d-flex justify-content-center align-items-center mb-5">
                            <h1 className="display-1 fw-bold text-white text-center">Now Playing...</h1>
                        </div>
                        <SearchBar field='showings' suggestions={suggestions}>Find showings near you...</SearchBar>
                    </div>
                </div>

                {/* * * * * * * * * *
                  *  Movies Nearby  *
                  * * * * * * * * * */}
                <div className='row justify-content-center mx-5 mt-5'>
                    <h1 className='text-light mx-auto text-center'>Movies</h1>
                    <hr className='mt-3 mb-4 text-white w-75 mx-auto'/>
                    <Carousel className='pb-4' controls={false}>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie1.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie6.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Movie Festival' imgSrc='assets/movie2.jpg' className='d-none d-md-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie3.jpg' className='d-none d-lg-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Retro Collection' imgSrc='assets/movie4.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie1.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Horror Night' imgSrc='assets/movie5.jpg' className='d-none d-md-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie6.jpg' className='d-none d-lg-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie1.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Movie Festival' imgSrc='assets/movie2.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='assets/movie3.jpg' className='d-none d-md-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Collection' imgSrc='assets/movie4.jpg' className='d-none d-lg-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>


                {/* * * * * * * * * *
                  * Theaters Nearby *
                  * * * * * * * * * */}
                <div className='row justify-content-center mx-5 mt-5'>
                    <h1 className='text-light mx-auto text-center'>Theaters</h1>
                    <hr className='mt-3 mb-4 text-white w-75 mx-auto'/>
                    <Carousel className='pb-4' controls={false}>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Festival Showhouse' imgSrc='assets/popcorn1.jpg'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Northpointe Theaters' imgSrc='assets/theater2.jpg'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Food & Bar Movies' imgSrc='assets/theater4.jpg' className='d-none d-md-block'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='West Cinema' imgSrc='assets/theater7.jpg' className='d-none d-lg-block'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Food & Bar Movies' imgSrc='assets/popcorn3.jpg'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='West Cinema' imgSrc='assets/theater3.jpg'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Northpointe Theaters' imgSrc='assets/popcorn2.jpg' className='d-none d-md-block'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Festival Showhouse' imgSrc='assets/theater5.jpg' className='d-none d-lg-block'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='West Cinema' imgSrc='assets/theater2.jpg'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Festival Showhouse' imgSrc='assets/popcorn2.jpg'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Northpointe Theaters' imgSrc='assets/theater6.jpg' className='d-none d-md-block'>
                                    This is a template movie theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Food & Bar Movies' imgSrc='assets/theater3.jpg' className='d-none d-lg-block'>
                                    This is a template movie theater theater description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </main>
    );
}


// export default function Index() {
//   return (
//     <>
//       <hr />
//       <Content />
//     </>
//   );
// }
