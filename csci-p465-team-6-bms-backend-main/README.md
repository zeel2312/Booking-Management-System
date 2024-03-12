# Instructions for developer:

-> Setting-up the database:- 

1) Clone this repository in your local system

2) open command line in VS code and write the following commands:
    
    python3 -m venv .venv
    
    source env/bin/activate
    
    pip install fastapi uvicorn sqlalchemy pymysql

3) Install mysql workbench
    https://dev.mysql.com/downloads/workbench/

4) Import the database (.sql file) which i will be sending in the slack
    
    for reference (https://www.geeksforgeeks.org/how-to-import-and-export-data-to-database-in-mysql-workbench/)

5) Now everything is in place and we can run the database through fastapi by writing the line below in command line:
    
    python -m uvicorn src.main:app --reload

6) open any browser and enter: http://127.0.0.1:8000/docs#/
