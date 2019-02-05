const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const {googleClientID, googleClientSecret} = require('./config/keys');
const app = express();

passport.use(
    new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile, done)=>{
    console.log('access Token', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
}));

app.get('/auth/google', passport.authenticate('google', {
    scope:['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'))

//https://console.developers.google.com
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server Connected')
})

// Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later,  we can do one of two things here:

// 1. Leave the authorized URI Redirect blank, since we will be fixing this later.

// 2. Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.