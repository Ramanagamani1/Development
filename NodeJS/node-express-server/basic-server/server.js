const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res)=> {
    console.log("HTTP METHOD= ",req.method)
    res.send("Hello world!");
})

app.get('/abc',(req,res)=> {
    console.log("HTTP METHOD= ",req.method)
    res.send("Good Morning Nagamani");
})

app.get('/sendObj',(req,res)=> {
    res.send({
        a : "mani",
        b : 21 ,
        c : "vizag"
    });
})

app.get('/arr',(req,res)=>{
    res.send([
        'mango',
        "apple",
        "grapes"
    ])
})

app.post('/abc',(req,res)=>{
    console.log(req.body)
    res.send("Wow! You have posted to abc")
})

app.get('/greet',(req,res)=>{
    console.log(req.query)
    if(Object.keys(req.query).length != 0 && req.query.name) {
        res.send(`Hello ${req.query.name}`);
    } else {
        res.send("Hello Guest");
    }
    
})

app.listen(3000,()=>{
    console.log("Example app listening on port 3000!")
})
