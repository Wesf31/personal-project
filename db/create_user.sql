insert into users (userName, userEmail, userPhone, admin, auth_id)
    values ($1, $2, $3, $4, $5)
    returning *;