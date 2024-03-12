// import './styles.css'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { MiniLoader } from './MiniLoader'
import { FormError } from './Booking'


interface SeatsProps {
  bookingDetailsCallback: Function
  bookTickets: Function
  loading: boolean
  showId: number | null | undefined
  showDate: string
  error: FormError
}
interface SeatsApiResponse {
  seats_details: BookedSeatsResponse[]
  show_details: SeatsDetailsResponse
}
export interface SeatsDetails {
  bookedSeats: number[]
  showId: number
  theatreId: number
  screenId: number
  movieId: number
}

interface BookedSeatsResponse {
  booked_seats: string
}

interface SeatsDetailsResponse {
  show_id: number
  theatre_id: number
  screen_id: number
  movie_id: number
}


const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const seats = Array.from({ length: 10 * 10 }, (_, i) => i)

export default function Seats({ bookingDetailsCallback, bookTickets, loading, showId, showDate, error }: SeatsProps) {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  const [seatsLoading, setSeatsLoading] = useState<boolean>(false)
  const [seatsDetails, setSeatdetails] = useState<SeatsDetails | null>(null)

  const url = 'http://127.0.0.1:8000/seat_by_show_id/'

  const getSeatDetails = async (id: number, date: string) => {
    const response = await fetch(url + id, { method: 'get' })
    const data: SeatsApiResponse = await response.json();
    let occupiedSeats: any = [];
    if (data?.seats_details?.length > 0) {
      data?.seats_details.forEach(element => {
        const seats = element.booked_seats.split(',').map(data => Number(data));
        occupiedSeats = [...occupiedSeats, ...seats]
      });
    } else {
      occupiedSeats = []
    }

    setSeatdetails({ bookedSeats: occupiedSeats, showId: id, theatreId: data.show_details.theatre_id, screenId: data.show_details.screen_id, movieId: data.show_details.movie_id })

    setTimeout(() => {
      setSeatsLoading(false)
    }, 1000);
  }


  useEffect(() => {
    if (showId && showDate) {
      console.log('getting updated')
      setSeatsLoading(true)
      getSeatDetails(showId, showDate)
    }
  }, [showId, showDate])

  useEffect(() => {
    console.log(error)
  })

  const confirmBookTickets = () => {
    bookTickets(seatsDetails)
  }

  return (
    <div className="bg-white rounded-bottom">
      <ShowCase />
      {seatsLoading && <MiniLoader />}
      {loading && !seatsLoading && <MiniLoader />}
      {!loading && !seatsLoading && <><Cinema
        seatsDetails={seatsDetails}
        selectedSeats={selectedSeats}
        bookingDetailsCallback={bookingDetailsCallback}
        onSelectedSeatsChange={(selectedSeats: any) => setSelectedSeats(selectedSeats)
        }
      />
        {error?.seats && <div className='text-danger text-center'>Please select a seat to proceed</div>}
        <div className='row align-items-center justify-content-end pt-3 pb-3'>
          <div className='col-md-8 d-flex justify-content-center'>
            <p className="info p-2 m-0">
              You have selected <span className="count font-weight-bold">{selectedSeats.length}</span>{' '}
              seats for the price of{' '}
              <span className="total font-weight-bold">
                {selectedSeats.length * selectedMovie.price}$
              </span>
            </p>
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
            <button type='button' className='btn btn-outline-dark book-btn' onClick={() => confirmBookTickets()}>book</button>
          </div>
        </div> </>}
    </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase bg-white">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ seatsDetails, selectedSeats, bookingDetailsCallback, onSelectedSeatsChange }: any) {
  function handleSelectedState(seat: any) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat: any) => selectedSeat !== seat),
      )
      console.log(selectedSeats.filter((selectedSeat: any) => selectedSeat !== seat))
      bookingDetailsCallback({ seats: selectedSeats.filter((selectedSeat: any) => selectedSeat !== seat) })
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
      console.log([...selectedSeats, seat])
      bookingDetailsCallback({ seats: [...selectedSeats, seat] })

    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = seatsDetails?.bookedSeats.includes(seat)
          return (
          <span
              tabIndex={0}
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyDown={
                isOccupied
                  ? null
                  : e => {
                    if (e.key === 'Enter') {
                      handleSelectedState(seat)
                    }
                  }
              }
            />
          )
        })}
      </div>
    </div>
  )
}
