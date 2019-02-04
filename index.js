const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send({
        text:' Hello'
    });
})

app.listen(3000, ()=>{
    console.log('Server Connected')
})


