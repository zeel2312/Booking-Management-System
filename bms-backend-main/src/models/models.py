from sqlalchemy import Boolean, Column, Integer, String, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship
from src.database.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True)
    phone = Column(String(15), unique=True)
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())
    bookings = relationship('Booking', backref="user")
    seats = relationship('Seat', backref='user')

class Movie(Base):
    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    genre = Column(String(50))
    actor = Column(String(200))
    director = Column(String(50))
    language = Column(String(50))
    duration = Column(String(50))
    description = Column(String(200))
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())
    bookings = relationship('Booking', backref="movie")
    showings = relationship('Showing', backref="movie")


class Theatre(Base):
    __tablename__ = 'theatres'

    id = Column(Integer, primary_key=True, index=True)
    theatre_name = Column(String(50))
    theatre_address = Column(String(200))
    theatre_city = Column(String(50))
    theatre_state = Column(String(50))
    theatre_postal_code = Column(Integer)
    theatre_country = Column(String(50))
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())
    bookings = relationship('Booking', backref="theatre")
    screens = relationship('Screen', backref="theatre")
    showings = relationship('Showing', backref="theatre")


class Screen(Base):
    __tablename__ = 'screens'

    id = Column(Integer, primary_key=True, index=True)
    theatre_id = Column(Integer, ForeignKey("theatres.id"), nullable=False)
    screen_name = Column(String(50))
    total_seats = Column(String(50))
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())
    seats = relationship('Seat', backref="screen")
    showings = relationship('Showing', backref="screen")


class Seat(Base):
    __tablename__ = 'seats'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    screen_id = Column(Integer, ForeignKey("screens.id"), nullable=False)
    showing_id = Column(Integer, ForeignKey("showings.id"), nullable=False)
    booked_seats = Column(String(50))
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())
    bookings = relationship('Booking', backref="seat")


class Booking(Base):
    __tablename__ = 'bookings'

    id = Column(Integer, primary_key=True, index=True)
    seats_booked = Column(Integer)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    seat_id = Column(Integer, ForeignKey("seats.id"), nullable=False)
    movie_id = Column(Integer, ForeignKey("movies.id"), nullable=False)
    theatre_id = Column(Integer, ForeignKey("theatres.id"), nullable=False) 
    ticket_booked_date = Column(DateTime(timezone=True)) 
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())

class Showing(Base):
    __tablename__ = 'showings'

    id = Column(Integer, primary_key=True, index=True)
    theatre_id = Column(Integer, ForeignKey("theatres.id"), nullable=False) 
    movie_id = Column(Integer, ForeignKey("movies.id"), nullable=False)
    screen_id = Column(Integer, ForeignKey("screens.id"), nullable=False)
    start_time = Column(String(50))
    end_time = Column(String(50))
    date = Column(String(50))
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())
    seats = relationship('Seat', backref='Showing')