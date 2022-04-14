let inpTasks = document.getElementById('inpTasks');
let btnAdd = document.getElementById('btnAdd');
let btnClear = document.getElementById('btnClear');
let btnRemove = document.getElementById('btnRemove');
let btnSort = document.getElementById('btnSort');
let listTasks = document.getElementById('listTasks');
let tasks=[]

function renderTaskList() {
    console.log(tasks)
    listTasks.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        let li=document.createElement('li');
        let input= document.createElement('input');
        let span=document.createElement('span');

        if(i!=0){
            let button=document.createElement('button');
            button.className ="btn btn-outline-primary btn-sm";
            let arrowup=document.createElement('i');
            arrowup.className="fas fa-arrow-up";
            button.appendChild(arrowup);
            li.appendChild(button)
        }

        if(i!=tasks.length-1){
            let button=document.createElement('button');
            button.className ="btn btn-outline-primary btn-sm";
            let arrowdown=document.createElement('i');
            arrowdown.className="fas fa-arrow-down";
            button.appendChild(arrowdown);
            li.appendChild(button)
        }
       
        input.addEventListener('change',function(event){
             if(input.checked){
                  tasks[input.id].checked=true;
                  span.style.textDecoration = "line-through";
             }else{
                tasks[input.id].checked=false;
                span.style.textDecoration = "none";
             }
        })

        input.type="checkbox";
        input.id=i;
        if(tasks[i].checked==true){
            input.checked=true;
        }
        span.innerText = " "+tasks[i].value;
        li.appendChild(input)
        li.appendChild(span)
        listTasks.appendChild(li);
    }
}

function addTask() {
   let task={"value":inpTasks.value,"checked": false};
   console.log(task)
   tasks.push(task);
   renderTaskList();
   saveTaskList();
   inpTasks.value="";
}


//In localstorage we can only store strings
function saveTaskList(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function retrieveList() {
    let retrievedTasks = localStorage.getItem("tasks");
    if (retrievedTasks){
        tasks=JSON.parse(retrievedTasks);
    }
}

function clearTaskList() {
    tasks=[];
    renderTaskList();
    saveTaskList();
}

btnAdd.onclick=function(){
    if(inpTasks.value!="")
       addTask();
 }

btnClear.onclick=function(){
    inpTasks.value="";
    inpTasks.focus(); 
}
 
inpTasks.addEventListener('keyup',function(event){
     if(event.keyCode===13){
         addTask();
     }
 })


retrieveList();
renderTaskList();

/*

*/