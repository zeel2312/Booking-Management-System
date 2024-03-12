def movie_screen_details_given_movie_id(movie_id, date):
  if movie_id:
    return 'SELECT S.ID AS showing_id, SC.TOTAL_SEATS as total_seats, SC.SCREEN_NAME as screen_name, S.START_TIME as start_time, S.END_TIME as end_time, SC.ID as screen_id FROM SHOWINGS S INNER JOIN MOVIES M ON S.MOVIE_ID = M.ID INNER JOIN SCREENS SC ON S.SCREEN_ID = SC.ID WHERE M.ID= ' + str(movie_id) + ' AND S.DATE='+ "'" + str(date)+"'"

def movie_seat_details_given_show_id(show_id):
  if show_id:
    return 'SELECT S.BOOKED_SEATS as booked_seats FROM SEATS S WHERE S.SHOWING_ID =' + str(show_id)
  
def get_ticket_details_by_movie_id_and_email(book_id, email):
  if book_id and email:
    return 'SELECT B.SEATS_BOOKED as seats_booked, B.TICKET_BOOKED_DATE as booked_date, M.TITLE as title, M.GENRE AS genre, M.LANGUAGE AS language, M.duration as duration, T.THEATRE_NAME AS t_name, T.THEATRE_ADDRESS AS t_address, T.THEATRE_CITY AS t_city, T.THEATRE_STATE as t_state, T.THEATRE_COUNTRY as t_country, SC.SCREEN_NAME AS screen_name FROM USERS U INNER JOIN BOOKINGS B ON B.USER_ID = U.ID INNER JOIN MOVIES M ON B.MOVIE_ID = M.ID INNER JOIN THEATRES T ON B.THEATRE_ID = T.ID INNER JOIN SCREENS SC ON SC.THEATRE_ID = T.ID WHERE U.EMAIL = ' + "'"+email+"'" + ' AND B.ID ='+ str(book_id)
  
def get_show_details_given_show_id(show_id):
  if show_id:
    return 'SELECT SH.ID as show_id, SH.SCREEN_ID AS screen_id, SC.THEATRE_ID AS theatre_id, SH.MOVIE_ID as movie_id FROM SHOWINGS SH INNER JOIN SCREENS SC ON SC.ID = SH.SCREEN_ID WHERE SH.ID=' +  str(show_id)
  
def search_all(searchTerm):
  if searchTerm:
    return 'SELECT id, title, "movie" FROM movies WHERE title LIKE \'%' + searchTerm + '%\' OR genre LIKE \'%' + searchTerm + '%\' OR actor LIKE \'%' + searchTerm + '%\' OR director LIKE \'%' + searchTerm + '%\' OR description LIKE \'%' + searchTerm + '%\' UNION ALL SELECT id, theatre_name, "theatre" FROM theatres WHERE theatre_name LIKE \'%' + searchTerm + '%\' OR theatre_address LIKE \'%' + searchTerm + '%\' OR theatre_city LIKE \'%' + searchTerm + '%\' OR theatre_state LIKE \'%' + searchTerm + '%\' OR theatre_postal_code LIKE \'%' + searchTerm + '%\' OR theatre_country LIKE \'%' + searchTerm + '%\';'

def search_movies(searchTerm):
  if searchTerm:
    return 'SELECT id, title FROM movies WHERE title LIKE \'%' + searchTerm + '%\' OR genre LIKE \'%' + searchTerm + '%\' OR actor LIKE \'%' + searchTerm + '%\' OR director LIKE \'%' + searchTerm + '%\' OR description LIKE \'%' + searchTerm + '%\';'

def search_theatres(searchTerm):
  if searchTerm:
    return 'SELECT id, theatre_name FROM theatres WHERE theatre_name LIKE \'%' + searchTerm + '%\' OR theatre_address LIKE \'%' + searchTerm + '%\' OR theatre_city LIKE \'%' + searchTerm + '%\' OR theatre_state LIKE \'%' + searchTerm + '%\' OR theatre_postal_code LIKE \'%' + searchTerm + '%\' OR theatre_country LIKE \'%' + searchTerm + '%\';'
