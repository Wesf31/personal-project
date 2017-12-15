require('dotenv').config()
const express = require('express')
    , bodyparser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , appointment_controller = require('./controllers/appointment_controller')
    , photo_controller = require('./controllers/photo_controller')
    , info_controller = require('./controllers/info_controller')

const app = express ()
app.use(cors())
app.use(bodyparser.json())

app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false 
}))

massive(process.env.DB_CONNECTION).then( db => {app.set('db', db)})
app.use(express.static(__dirname + '/../build'))

app.use(passport.initialize())
app.use(passport.session())

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN ,
    clientID: process.env.AUTH_CLIENT_ID ,
    clientSecret: process.env.AUTH_CLIENT_SECRET ,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db')
    let userData = profile._json,
        auth_id = userData.user_id.split('|')[1]
        
    db.find_user([auth_id]).then( user => {
        if ( user[0] ) {
             done(null, user[0].id)
        } else {
            db.create_user([userData.name, userData.email, null, null, auth_id]).then ( user =>
            {
             done(null, user[0].id)
            }).catch()
        }
    })
}))

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.AUTH_APPOINTMENT_REDIRECT,
    failureRedirect: process.env.AUTH_LANDING_REDIRECT
}))

passport.serializeUser(function( ID, done ){
    return done(null, ID)
})

passport.deserializeUser(function( ID, done ){
    const  db = app.get('db')
    
    db.find_user_by_session([ID]).then ( user => {
       return done(null, user[0])
    })
})

app.get('/auth/me', function( req, res, next ){
    if( !req.user ) {
        res.status(401).send('LOG IN REQUIRED')
    } else {
        res.status(200).send(req.user)
    }
})

app.get('/auth/logout', function(req, res, next ){
    req.logout()
    res.redirect(process.env.AUTH_LANDING_REDIRECT)
})

app.post('/api/appointment', appointment_controller.create)
app.put('/api/appointment/:id', appointment_controller.update)
app.post('/api/gallery', photo_controller.create)
app.get('/api/gallery', photo_controller.get)
app.post('/api/info', info_controller.create)
app.get('/api/info', info_controller.get )

app.listen(process.env.SERVER_PORT, () => { console.log('(0) __ (0)')}) 