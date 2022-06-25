const fs=require('fs');

fs.writeFile('data.txt','Hello world',(err)=>{
    if(err){
        throw err;
    } else {
        console.log('File Saved')
    }
})