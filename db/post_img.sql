insert into img (imgURL, status)
    values ($1, $2)
    returning *;