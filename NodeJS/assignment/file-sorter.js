const fs= require('fs');
const arr1 = fs.readFileSync('1.txt').toString().replace(/\r\n/g,'\n').split('\n');
const arr2 = fs.readFileSync('2.txt').toString().replace(/\r\n/g,'\n').split('\n');
const arr3 = fs.readFileSync('3.txt').toString().replace(/\r\n/g,'\n').split('\n');
const res= arr1.concat(arr2,arr3)
let ans = []
res.map(x=> {
    ans.push(parseInt(x))
})
ans.sort(function(a, b){return a-b});
const writeStream = fs.createWriteStream('output.txt');
ans.forEach(value => writeStream.write(`${value}\n`));