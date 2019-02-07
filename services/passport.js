const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {googleClientID, googleClientSecret} = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
})

passport.deserializeUser((id, done)=>{
        User.findById(id).then(user=>{
            done(null, user);
        }).catch(err=>{
            console.log(err);
        })
 
});

passport.use(
    new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},async (accessToken, refreshToken, profile, done)=>{
    try{
        const user = await User.findOne({googleId: profile.id})
        if(user){
            done(null, user);
        }else{
        const newUser = await new User({googleId: profile.id}).save();
        done(null, newUser);
        }
       
    }catch(err){
        console.log(err);
    }
    // User.findOne({googleId: profile.id})
    // .then(user=>{
    //     if(user){
            
    //     }else{
    //         return new User({googleId: profile.id}).save();
    //     }
    // }).then(newUser=>{
    //     console.log(newUser);
    // }).catch(err=> console.log(err));
}));



// Since the main goal of using http://localhost:5000/* was to show the redirect error a few lectures later,  we can do one of two things here:

// 1. Leave the authorized URI Redirect blank, since we will be fixing this later.

// 2. Enter http://localhost:5000/auth/google/callback now, since that is what it will be changed to in a later lecture.