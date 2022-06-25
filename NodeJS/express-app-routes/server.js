/** 
 On GET /teachers show all teachers
* On GET /teachers/:id show particular teacher 
* 
* On GET /students show all students
* On GET /students/:id show particular student
*/

const express = require('express')
const app= express()

const studentRoute = require('./students')
const teacherRoute = require('./teachers')

app.use('/students',studentRoute)
app.use('/teachers', teacherRoute)

app.listen(4000,()=>{
    console.log('app listening on port 4000')
})