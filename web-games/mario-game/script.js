let gamebox=document.getElementById('gamebox');
let context=gamebox.getContext('2d');

let enemy=[
    {
        name:"turtle",
        color: "red",
        x:150,
        y:0,
        h:50,
        w:50,
        vx:0,
        vy:1
    },
    {
        name:"turtle",
        color: "red",
        x:350,
        y:0,
        h:50,
        w:50,
        vx:0,
        vy:1.5
    },
    {
        name:"turtle",
        color: "red",
        x:550,
        y:0,
        h:50,
        w:50,
        vx:0,
        vy:2
    },
]

let princess={
    name:"princess",
    x:750,
    y:350,
    h:50,
    w:50
}

let player = {
    name:"mario",
    x:5,
    y:350,
    h:50,
    w:50,
    vx:5,
    vy:0,  
}

function drawBox(box) {
    let img = document.getElementById(box.name);
    context.drawImage(img,box.x,box.y,box.w,box.h);
}

document.addEventListener('keydown',movePlayer);

function movePlayer(key){
    if(key.keyCode=="37"){
        player.x-=player.vx;
    }else if(key.keyCode=="38")
        player.y-=player.vy;
    else if(key.keyCode=="39")
         player.x+=player.vx;
    else if(key.keyCode=="40")
        player.y=+player.vy;

}

function updateGameState() {
    for(var i=0;i<enemy.length;i++){
        enemy[i].y+=enemy[i].vy;
        if (enemy[i].y + enemy[i].h >= gamebox.height || enemy[i].y <= 0) {
            enemy[i].vy *= -1;
        }
    }  
}

function updateGame() {
    //update game state
    updateGameState();
    context.clearRect(0,0,gamebox.width,gamebox.height);
    drawBox(player);
    for(var i=0;i<enemy.length;i++){
        drawBox(enemy[i]);
    }
    drawBox(princess)
    window.requestAnimationFrame(updateGame);
}

updateGame();