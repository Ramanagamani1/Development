const express = require('express')
const app = express()

function base64TOASCCII(input) {
    return Buffer.from(input,'base64').toString('ascii')
}

function ASCIITobase64(input) {
    return Buffer.from(input,'ascii').toString('base64')
}

function decodeQuery(req,res,next) {
    console.log(req.query)
    Object.keys(req.query).forEach(key=> {
       req.query[key] = base64TOASCCII(req.query[key])
   })
   console.log(req.query)
   next()
}

function checkForKey(req,res,next) {
    if (req.query.key === '42') {
        next()
    } else {
        res.send('You are not authorised to access this page')
    }
}

app.use(decodeQuery) // global middleware - runs for every router defined below this

app.get('/public', (req,res)=>{
    res.send('Hello '+ req.query.name)
})

app.get('/private', checkForKey, (req,res)=>{
    res.send('Hi '+req.query.name+ ', welcome to secret world!!')
})

app.listen(4000,()=>{
    console.log('server started on http://localhost:4000');
})