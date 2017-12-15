insert into img (imgURL, imgURL2, imgURL3, imgURL4, imgURL5, imgURL6, imgURL7)
    values ($1, $2, $3, $4, $5, $6, $7)
    returning *;