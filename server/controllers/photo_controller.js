module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        let {
            uploadedFileCloudinayrUrl,
            imgstatus1
        } = req.body
        db.post_img([uploadedFileCloudinayrUrl, imgstatus1])
            .then ( () => res.status(200).send())
            .catch( (error) => res.status(500).send(error))
    },
    get: (req, res, next) => {
        const db = req.app.get('db')
        db.get_img()
        .then( img => res.status(200).send ( img ))
        .catch( (error) => res.status(500).send(error))
    }
}