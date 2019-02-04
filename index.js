const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const {googleClientID, googleClientSecret} = require('./config/keys');
const app = express();

passport.use(new GoogleStrategy());

//https://console.developers.google.com
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server Connected')
})



// Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later,  we can do one of two things here:

// 1. Leave the authorized URI Redirect blank, since we will be fixing this later.

// 2. Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.