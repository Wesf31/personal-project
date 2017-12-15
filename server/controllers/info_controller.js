module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        let {
            InfoPageHeader,
            InfoPageTextBody,
            SmallBox1Header,
            SmallBox1Text,
            SmallBox2Header,
            SmallBox2Text
        } = req.body 
        db.info_update([InfoPageHeader, InfoPageTextBody, SmallBox1Header, SmallBox1Text, SmallBox2Header, SmallBox2Text])
            .then ( () => res.status(200).send())
            .catch( (error) => res.status(500).send(error))
    },
    get: (req, res, next) => {
        const db = req.app.get('db')
        db.get_info()
        .then( info => res.status(200).send ( info ))
        .catch( (error) => res.status(500).send(error))
    }
}