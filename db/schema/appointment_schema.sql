CREATE TABLE appointment (
    ID serial PRIMARY KEY,
    appWith int REFERENCES users (id),
    appDate text NOT NULL,
    appTime text NOT NULL,
    appComment text 
)