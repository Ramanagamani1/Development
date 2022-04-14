let gamebox=document.getElementById('gamebox');
let context=gamebox.getContext('2d');

/*context.fillStyle='brown';

let posX=0;
let posY=0;
let speed=1;

function drawNext(){
    posX+=speed;
    posY+=speed;
    context.clearRect(0,0,gamebox.clientWidth,gamebox.height);  
    context.fillRect(posX,posY,20,20);
    window.requestAnimationFrame(drawNext);
}

drawNext();*/

let enemy = {
    x:100,
    y:0,
    h:50,
    w:50,
    color:'red',
    vx:0,
    vy:1
}

let player = {
    x:0,
    y:175,
    h:50,
    w:50,
    vx:1,
    vy:0,
    color:'blue'
}

function drawBox(box) {
   context.fillStyle=box.color;
   context.fillRect(box.x,box.y,box.w,box.h);
}

function updateGameState() {
   enemy.y+=enemy.vy;
   if(enemy.y + enemy.h > gamebox.height){
       enemy.vy=-1;
   } else if(enemy.y<0){
       enemy.vy=1;
   }
}

function updateGame() {
    //update game state
    updateGameState();
    context.clearRect(0,0,gamebox.width,gamebox.height);
    drawBox(player);
    drawBox(enemy);
    window.requestAnimationFrame(updateGame);
}

updateGame();
