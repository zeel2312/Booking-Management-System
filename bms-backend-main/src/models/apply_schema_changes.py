from database.database import Base, engine

# Import your models here
from models.models import User, Booking, Theatre, Movie, Showing, Screen, Seat

# Drop existing tables
Base.metadata.drop_all(bind=engine)

# Recreate the tables with the updated schema
Base.metadata.create_all(bind=engine)