const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {googleClientID, googleClientSecret} = require('../config/keys');

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



// Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later,  we can do one of two things here:

// 1. Leave the authorized URI Redirect blank, since we will be fixing this later.

// 2. Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.