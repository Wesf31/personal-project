module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        let {
            time,
            comment,
            desiredDate
        } = req.body
        time= time.split('T')[1].split('.')[0]
        desiredDate= desiredDate.split('T')[0]
        db.create_appointment([req.user.id, desiredDate, time, comment])
            .then( () => res.status(200).send())
            .catch( (error) => res.status(500).send(error))
    },

    update: (req, res, next) => {
        console.log(req.body.phone, req.user.id)
        const db = req.app.get('db')
        let {
            phone
        } = req.body
        db.update_user([req.user.id, phone])
            .then ( () => res.status(200).send ())
            .catch( (error) => res.status(500).send(error))
    }
}