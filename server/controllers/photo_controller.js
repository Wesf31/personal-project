module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db')
    let {
      uploadedFileCloudinayrUrl,
      uploadedFileCloudinayrUrl2,
      uploadedFileCloudinayrUrl3,
      uploadedFileCloudinayrUrl4,
      uploadedFileCloudinayrUrl5,
      uploadedFileCloudinayrUrl6,
      uploadedFileCloudinayrUrl7,
    } = req.body
    db.post_img([uploadedFileCloudinayrUrl, uploadedFileCloudinayrUrl2, uploadedFileCloudinayrUrl3, uploadedFileCloudinayrUrl4, uploadedFileCloudinayrUrl5, uploadedFileCloudinayrUrl6, uploadedFileCloudinayrUrl7])
      .then(() => res.status(200).send())
      .catch(error => res.status(500).send(error))
  },
  get: (req, res, next) => {
    const db = req.app.get('db')
    db.get_img()
      .then(img => res.status(200).send(img))
      .catch(error => res.status(500).send(error))
  },
}