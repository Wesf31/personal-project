CREATE TABLE users (
    id serial PRIMARY KEY,
    userName VARCHAR (255) NOT NULL,
    userEmail VARCHAR (255) NOT NULL,
    userPhone int,
    admin boolean,
    auth_id text 
    )