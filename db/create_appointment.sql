insert into appointment (appWith, appDate, appTime, appComment)
values ($1, $2, $3, $4)
    returning *; 