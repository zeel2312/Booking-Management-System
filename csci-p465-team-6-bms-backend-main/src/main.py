from fastapi import FastAPI, HTTPException, Depends, status, Request
from typing import Annotated
import src.models.models as models
import src.dto.base as base
import src.query.movies_query as movies_query
from src.database.database import engine, SessionLocal
from sqlalchemy.orm import Session
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

session = Session(engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[ Session, Depends(get_db) ]


@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: base.UserBase, db: db_dependency):
    db_user = models.User(**user.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_user)
    db.commit()

@app.get("/users/{user_id}", status_code=status.HTTP_200_OK)
async def read_user(user_id: int, db: db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail='User not found')
    return user

@app.post("/bookings/", status_code=status.HTTP_201_CREATED)
async def create_booking(booking: base.BookingBase, db: db_dependency):
    db_booking = models.Booking(**booking.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_booking)
    db.commit()

@app.get("/bookings/{booking_id}", status_code=status.HTTP_200_OK)
async def read_booking(booking_id: int, db: db_dependency):
    booking = db.query(models.Booking).filter(models.Booking.id == booking_id).first()
    if booking is None:
        raise HTTPException(status_code=404, detail='Booking was not found')
    return booking

@app.delete("/bookings/{booking_id}", status_code=status.HTTP_200_OK)
async def delete_booking(booking_id: int, db: db_dependency):
    db_booking = db.query(models.Booking).filter(models.Booking.id == booking_id).first()
    if db_booking is None:
        raise HTTPException(status_code=404, detail='Booking was not not found')
    db.delete(db_booking)
    db.commit()

@app.post("/theatres/", status_code=status.HTTP_201_CREATED)
async def create_theatre(theatre: base.TheatreBase , db: db_dependency):
    db_theatre = models.Theatre(**theatre.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_theatre)
    db.commit()

@app.get("/theatres/{theatre_id}", status_code=status.HTTP_200_OK)
async def read_theatre(theatre_id: int, db: db_dependency):
    theatre = db.query(models.Theatre).filter(models.Theatre.id == theatre_id).first()
    if theatre is None:
        raise HTTPException(status_code=404, detail='theatre was not found')
    return theatre

@app.post("/movies/", status_code=status.HTTP_201_CREATED)
async def create_movie(movie: base.MovieBase , db: db_dependency):
    db_movie = models.Movie(**movie.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_movie)
    db.commit()

@app.get("/movies/{movie_id}", status_code=status.HTTP_200_OK)
async def read_movie(movie_id: int, db: db_dependency):
    movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    if movie is None:
        raise HTTPException(status_code=404, detail='movie was not found')
    return movie

@app.post("/screens/", status_code=status.HTTP_201_CREATED)
async def create_screen(screen: base.ScreenBase , db: db_dependency):
    db_screen = models.Screen(**screen.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_screen)
    db.commit()

@app.get("/screens/{screen_id}", status_code=status.HTTP_200_OK)
async def read_screen(screen_id: int, db: db_dependency):
    screen = db.query(models.Screen).filter(models.Screen.id == screen_id).first()
    if screen is None:
        raise HTTPException(status_code=404, detail='screen was not found')
    return screen

@app.post("/showings/", status_code=status.HTTP_201_CREATED)
async def create_showing(showing: base.ShowingBase , db: db_dependency):
    db_showing = models.Showing(**showing.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_showing)
    db.commit()

@app.get("/showings/{showing_id}", status_code=status.HTTP_200_OK)
async def read_showing(showing_id: int, db: db_dependency):
    showing = db.query(models.Showing).filter(models.Showing.id == showing_id).first()
    if showing is None:
        raise HTTPException(status_code=404, detail='showing was not found')
    return showing

@app.post("/seats/", status_code=status.HTTP_201_CREATED)
async def create_seat(seat: base.SeatBase , db: db_dependency):
    db_seat = models.Seat(**seat.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
    db.add(db_seat)
    db.commit()

@app.get("/seats/{seat_id}", status_code=status.HTTP_200_OK)
async def read_seat(seat_id: int, db: db_dependency):
    seat = db.query(models.Seat).filter(models.Seat.id == seat_id).first()
    if seat is None:
        raise HTTPException(status_code=404, detail='seat was not found')
    return seat

@app.get("/showings_by_movie/{movie_id}", status_code=status.HTTP_200_OK)
async def get_showings_by_movie_id(movie_id: int, date: str , db: db_dependency):
    sql = movies_query.movie_screen_details_given_movie_id(movie_id, date)
    showings = db.execute(sql).all()
    if showings is None:
        raise HTTPException(status_code=404, detail='showing was not found')
    return showings

@app.get("/seat_by_show_id/{show_id}", status_code=status.HTTP_200_OK)
async def get_showings_by_movie_id(show_id: int, db: db_dependency):
    sql = movies_query.get_show_details_given_show_id(show_id)
    showDetails = db.execute(sql).first()
    sql2 = movies_query.movie_seat_details_given_show_id(show_id)
    seatsDetails = db.execute(sql2).all()
    if seatsDetails is None:
        raise HTTPException(status_code=404, detail='showing was not found')
    return {"seats_details": seatsDetails, "show_details": showDetails}

@app.get("/get_ticket_by_booking_id/{book_id}/", status_code=status.HTTP_200_OK)
async def get_showings_by_movie_id(book_id: int, email: str, db: db_dependency):
    sql = movies_query.get_ticket_details_by_movie_id_and_email(book_id, email)
    seatsDetails = db.execute(sql).first()
    if seatsDetails is None:
        raise HTTPException(status_code=404, detail='showing was not found')
    return seatsDetails

@app.put("/add_booking_details", status_code=status.HTTP_200_OK)
async def add_booking_details(req: Request, db: db_dependency):
    data_dict = await req.body()
    data_str = data_dict.decode('utf-8')
    item = json.loads(data_str)
    user = db.query(models.User).filter(models.User.email == item.get('email')).first()
    user_already_exist = user and user.email == item.get('email')
    user_id = None
    if(user_already_exist):
        user_id = user.id
    
    with Session(engine) as session:
        try:
            if not user_already_exist:
                    user = base.UserBase(email= item.get('email'), phone= item.get('mobile'))
                    db_user = models.User(**user.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
                    session.add(db_user)
                    session.flush()
                    user_id = db_user.id
            result = ", ".join(map(str, item.get('booked_seats')))
            seat = base.SeatBase(user_id = user_id, screen_id= item.get('screen_id'), booked_seats= result, showing_id=item.get('show_id'))
            db_seat = models.Seat(**seat.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
            session.add(db_seat)
            session.flush()
            seat_id = db_seat.id

            booking = base.BookingBase(movie_id=item.get('movie_id'), seat_id=seat_id, user_id=user_id, theatre_id=item.get('theatre_id'), seats_booked=len(item.get('booked_seats')), ticket_booked_date=item.get('booked_date'))
            db_booking = models.Booking(**booking.dict(), created_at=datetime.utcnow(), updated_at=datetime.utcnow())
            session.add(db_booking)
            session.commit()

            return {"user": {'email': db_user.email, 'mobile': db_user.phone}, 'seat_details': {'booked_seats': db_seat.booked_seats, 'no_of_seats_booked': db_booking.seats_booked}, "booking_id": db_booking.id}

        except Exception as e:
            print(e)
            session.rollback()
            raise HTTPException(status_code=422, detail='Provide correct data')
        
@app.get("/search_all", status_code=status.HTTP_200_OK)
async def search_all(searchTerm: str, db: db_dependency):
    sqlMovies = movies_query.search_movies(searchTerm)
    sqlTheatres = movies_query.search_theatres(searchTerm)
    movieSearchResults = db.execute(sqlMovies).all()
    theatreSearchResults = db.execute(sqlTheatres).all()
    if movieSearchResults is None or theatreSearchResults is None:
        raise HTTPException(status_code=404, detail='Not Found')
    
    return {"movie_matches": movieSearchResults, "theatre_matches": theatreSearchResults}