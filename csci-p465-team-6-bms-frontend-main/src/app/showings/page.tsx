import 'bootstrap/dist/css/bootstrap.css';
import './page.css';

import {Carousel, CarouselItem} from "react-bootstrap";
/*
TODO - CHANGE THIS PAGE TO ONLY INCLUDE MOVIES, NOT THEATERS
*/

import SearchBar from '@/components/SearchBar'
import MovieCard from "@/components/MovieCard";
export default function Page() {
    return (
        <main>
            <div className="container-fluid p-0">
                <div className="row-fluid p-0">
                    <div className="card border-0">
                        <img className="card-img rounded-0" src="assets/theater1.jpg" draggable="false" alt="Movie theater."/>
                        <div className="card-img-overlay d-flex justify-content-center align-items-center mb-5">
                            <h1 className="display-1 fw-bold text-white text-center">Now Playing...</h1>
                        </div>
                        <SearchBar field='showings' suggestions={['Oppenheimer', 'Barbie', 'Guardians Of The Galaxy: Volume 3']}>Find showings near you...</SearchBar>
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
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie1.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie6.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Movie Festival' imgSrc='placeholders/movie2.jpg' className='d-none d-md-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie3.jpg' className='d-none d-lg-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Retro Collection' imgSrc='placeholders/movie4.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie1.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Horror Night' imgSrc='placeholders/movie5.jpg' className='d-none d-md-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie6.jpg' className='d-none d-lg-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='row'>
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie1.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Movie Festival' imgSrc='placeholders/movie2.jpg'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Cinema' imgSrc='placeholders/movie3.jpg' className='d-none d-md-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
                                </MovieCard>
                                <MovieCard title='Retro Collection' imgSrc='placeholders/movie4.jpg' className='d-none d-lg-block'>
                                    This is a template movie description. Some of this text will be displayed, and the rest will be cut off automatically using webkit clamping.
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
