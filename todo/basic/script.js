/*
  document -> DOM = Document Object Model
  window -> BOM = Browser Object Model
*/
let inpTask=document.getElementById("input");
let listTasks=document.getElementById("listTasks");

function addItemToList(taskName){
    let newTaskListItem=document.createElement("li");
    newTaskListItem.innerText=taskName;
    listTasks.appendChild(newTaskListItem);
}

function getNewTaskName(){
    return inpTask.value;
}

let btnAdd=document.getElementById("add");

document.addEventListener('keypress',function(e){
    if(e.keyCode==13){
        btnAdd.click();
    }
});

btnAdd.onclick=function(){
    let newTaskName = getNewTaskName();
    if(newTaskName==""){
        alert("Input cannot be empty");
        return;
    }
    addItemToList(newTaskName);
    inpTask.value="";       
} 

/*
 1. when enter button is clicked (cursor is on inpTask), also do same steps as add button
 2. when input is empty show an alert
*/
