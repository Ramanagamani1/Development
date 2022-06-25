const express = require('express')
const app = express()

//middleware
function checkIfKnownPerson(req,res,next) {
    if( req.query.key === '42'){
        next();
    } else {
        res.send('You are not a known person');
    }
}

function welcomeInside(req,res) {
    res.send("Welcome to the world of Scalerverse!")
}

function sayHello(req,res) {
    res.send("Hello world!")
}

app.get('/public', sayHello)
app.get('/private',checkIfKnownPerson ,welcomeInside)

app.listen(4000,()=>{
    console.log('server started on http://localhost:4000');
})