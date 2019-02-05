const express = require('express');
const mongoose = require('mongoose');
const {mongoURI} = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(mongoURI);

const app = express();

require('./routes/authRoutes')(app);

//https://console.developers.google.com
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server Connected')
});

