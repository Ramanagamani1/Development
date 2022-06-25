const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.text())

let tasks = [
    "Enroll to scaler",
    "Learn Node JS",
    'Learn React JS',
    "Learn DSA",
    "Get a job"
]

app.get('/',(req,res)=>{
    res.send("Welcome to task list project")
})

app.get('/tasks',(req,res)=>{
    res.send(tasks)
})

app.get('/tasks/:id',(req,res)=>{
    let id=req.params.id
    if(id<1 || id>tasks.length){
        res.send("Invalid id")
    } 
    else{
        res.send(tasks[id-1])
    }   
})

app.post('/tasks',(req,res)=>{
    tasks.push(req.body)
    res.send(tasks)
})

app.listen(3001,()=>{
    console.log('server started on port 3001')
})