const express = require('express')

const route = express.Router();

const studentList = [
    {name: 'Abhishek', college:'GVP'},
    {name: 'Nagamani', college:'AU'},
    {name: 'Sravani',college: 'Vignan'},
    {name: 'Vineetha',college: 'ANITS'},
    {name: 'Avinit',college: 'NIT Warangal'}
]

route.get('/',(req,res)=> {
    res.send(studentList);
})

route.get('/:id',(req,res)=>{
    const id= Number(req.params.id)
    if(isNaN(id)) {
        return res.status(404).send('Invalid id')
    }
    if(id <0 || id>=studentList.length) {
        return res.status(404).send('Student not found')
    }
    res.send(studentList[id])
})

module.exports = route