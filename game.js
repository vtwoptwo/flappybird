
document.addEventListener("keydown", jump);

function jump(event) {
    if (event.keyCode == 32) {
        birdY -= 45;
    }
}



var points = 0;


var canvas = document.getElementById('canvas');


var context = canvas.getContext('2d');
var bird=new Image();
var background=new Image(); 
var base=new Image();
var pipeUp=new Image();
var pipeDown = new Image(); 
var gap = pipeUp.height + 90;
// creating conditions for the bird to be able to move

var birdX =10;
var birdY = 100;
var gravityFall = 1;


bird.src ="assets/birdMid.png";
background.src ="assets/background.png";
base.src ="assets/base.png";
pipeUp.src ="assets/pipeUp.png";
pipeDown.src ="assets/pipeDown.png";

var obstacle = [];

obstacle[0] = {
    x: canvas.width,
    y: 0
}

function draw() {
    context.drawImage(background, 0, 0);

    for (var i = 0; i < obstacle.length; i++) {

        context.drawImage(pipeDown, obstacle[i].x, obstacle[i].y);
        context.drawImage(pipeUp, obstacle[i].x, obstacle[i].y + pipeUp.height + gap); 
       
        obstacle[i].x--;

        if (obstacle[i].x == 50) {
            obstacle.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

         
    }


    context.drawImage(base, 0,canvas.height-base.height);
    context.drawImage(bird, birdX, birdY);
    birdY += gravityFall;
    requestAnimationFrame(draw);
    
}

draw();

