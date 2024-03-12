from pydantic import BaseModel

class BookingBase(BaseModel):
    seats_booked: int
    seat_id: int
    user_id: int
    movie_id: int
    theatre_id: int
    ticket_booked_date: str

class UserBase(BaseModel):
    email: str
    phone: str

class TheatreBase(BaseModel):
    theatre_name: str
    theatre_address: str
    theatre_city: str
    theatre_state: str
    theatre_postal_code: int
    theatre_country: str

class MovieBase(BaseModel):
    title: str
    genre: str
    actor: str
    director: str
    language: str
    duration: str
    description: str

class ScreenBase(BaseModel):
    theatre_id: int
    screen_name: str
    total_seats: str

class ShowingBase(BaseModel):
    theatre_id: int
    movie_id: int
    screen_id: int
    start_time: str
    end_time: str
    date: str

class SeatBase(BaseModel):
    user_id: int
    screen_id: int
    booked_seats: str
    showing_id: int

class BookingItem(BaseModel):
    email: str
    mobile: str
    booked_seats: list[int]
    show_id: int
    movie_id: int
    theatre_id:int
    screen_id: int
    ticket_booked_date: str

class BookingItemQuery(BaseModel):
    query: str