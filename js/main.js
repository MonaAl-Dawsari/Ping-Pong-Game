


//select the canvas element and set it inside canvas constent
const canvas = document.getElementById("pingpong");

//getContext gives us method and properities to draw the canvas
const context = canvas.getContext("2d");

//load sounds
let userScore =new Audio ();
let comScore=new Audio();
let hit = new Audio ();
let wall =new Audio ();


hit.src = "../sounds/sounds_hit.mp3";
wall.src = "../sounds/sounds_wall.mp3";
comScore.src = "../sounds/sounds_comScore.mp3";
userScore.src = "../sounds/sounds_userScore.mp3";


//create object for User Paddle
const user = {
    x: 0, // left side of canvas
    y: (canvas.height - 100) / 2, // -100 the height of paddle
    width: 20,
    height: 120,
    score: 0,
    color: "#be4154"
}


// create object for Computer Paddle
const com = {
    x: canvas.width - 20, // - width of paddle
    y: (canvas.height - 100) / 2, // -100 the height of paddle
    width: 20,
    height: 120,
    score: 0,
    color: "#bf6d40"
}

// create object for  the Ball 
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 15,
    velocityX: 4,
    velocityY: 4,
    speed: 4,
    color: "#d6c629"
}


//create object for the net
const net = {
    x: (canvas.width - 2) / 2,
    y: 0,
    height: 15,
    width: 2,
    color: "#77887a"
}

//draw rectangle function  to draw paddles
function drawRec(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);

}

//draw circle function to draw the ball
function drawCir(x, y, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}


//draw net function to draw the net
function drawNet() {
    for (let i = 0; i <= canvas.height; i += 20) {
        drawRec(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// create function for the score called drawText
function drawText(text, x, y, color) {
    context.fillStyle = color;
    context.font = '80px "Audiowide", sans-serif';
    context.fillText(text, x, y);
}

//drawing function that does all the drawing
function drawin() {

    //clear the canvas 
    drawRec(0, 0, canvas.width, canvas.height, "#f5deb3");

    //draw net
    drawNet();
    //draw the score for the User 
    drawText(user.score, canvas.width / 4, canvas.height / 5, "#be4154");

    //draw the score for the computer
    drawText(com.score, (canvas.width / 4) * 3, canvas.height / 5, "#bf6d40");
    // invoke draw rect fanction to draw user's paddle
    drawRec(user.x, user.y, user.width, user.height, user.color);

    //  invoke draw rect fanction to draw computer's paddle
    drawRec(com.x, com.y, com.width, com.height, com.color);
    // invoke draw circle fanction to draw the ball
    drawCir(ball.x, ball.y, ball.radius, ball.color);
}

//control the user paddle
canvas.addEventListener("mousemove", movePadlle);

function movePadlle(event) {
    let rect = canvas.getBoundingClientRect();

    user.y = event.clientY - rect.top - user.height / 2;
}


//collision function
function collision (b,p){//b for ball , p for player
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
 
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
//test if there is collision or not
return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}
//reset the ball when the player or the computer score point
function resetBall (){

    ball.x=canvas.width/2;
    ball.y=canvas.height/2;
    ball.speed=5;
    ball.velocityX=-ball.velocityX;
}

/*
//the winner
function winner (){
    if (user.score<com.score){
        alert("the computer Wins!");
    }
   else { alert("the player Wins!");}
  
  }*/

//update function for the logic of the game
function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;


    //AI to control the computer paddle 
    let comLevel=0.1;
    com.y += (ball.y-(com.y+com.height/2))*comLevel;

    // for the ball if it hit the bottom or the top
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
        wall.play();
    }
    
    //check if the paddle hit the user or the com paddle
let player =(ball.x < canvas.width/2) ? user : com;
if (collision(ball,player)){
    // play sound
    hit.play();
    let collidePoint =(ball.y-(player.y+player.height/2));
    collidePoint= collidePoint/(player.height/2); 
     let angle =(Math.PI/4)*collidePoint;
     let direction =(ball.x<canvas.width/2)? 1:-1;
     ball.velocityX=direction*ball.speed*Math.cos(angle);
     ball.velocityY=direction*ball.speed*Math.sin(angle);
     ball.speed+=0.1;


  } 

//update the score 

//add score to the computer
if (ball.x-ball.radius<0){
   com.score++;
   comScore.play();
   resetBall ();
   
}
//add score to the player
else if (ball.x-ball.radius>canvas.width){

user.score++;
userScore.play();
resetBall ();


}



 
}


//the main function that will call two function 
//1-drawin function for drawing the objects 
//2-update function for the logic of the game
function game() {
    update();
    drawin();
    
}
// loop for call the game function 50 times in one second
const framePerSec = 50;
setInterval(game, 1000 / framePerSec);

