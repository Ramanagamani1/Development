const express = require('express')
const app = express()
const fs= require('fs')

let tasks;

fs.readFile('tasks.json',(err,data)=>{
    if(err)
      throw err;
    else {
        tasks = JSON.parse(data)
        console.log(tasks)
    }   
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.text())


app.get('/',(req,res)=>{
    res.send("Welcome to task list project")
})

app.get('/tasks',(req,res)=>{
    res.send(tasks)
})

app.get('/tasks/:id',(req,res)=>{
    let id=req.params.id

    if(id<1 || id>tasks.length){
        return res.status(404).send('Task not found');
    } 
    else{
        res.send(tasks[id])
    }   
})

function writeToFile() {
    fs.writeFile('tasks.json', JSON.stringify(tasks),(err)=>{
        if(err){
            throw err;
        } else {
            console.log('File Saved')
        }
    })
}

app.delete('/tasks/:id', (req,res)=>{
      let id=req.params.id
      delete tasks[id]
      console.log(tasks)
      writeToFile()
      res.send("Deleted task with id :"+id +" successfully");
})

app.post('/tasks',(req,res)=>{
    console.log(req.body)
    //Please post the data as JSON object giving key as task
    tasks[Object.keys(tasks).length+1] = req.body.task
    console.log(tasks)
    writeToFile()
    res.send("task posted successfully")
})

app.listen(3001,()=>{
    console.log('server started on port 3001')
})