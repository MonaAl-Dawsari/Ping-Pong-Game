


//select the canvas element and set it inside canvas constent
const canvas = document.getElementById("pingpong");

//getContext gives us method and properities to draw the canvas
const context = canvas.getContext("2d");

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


/*
//collision function
function collision (b,p){//b for ball , p for player
 b.top=b.y -b.radius;
 b.bottom=b.y +b.radius;
 b.left=b.x-b.radius;
 b.right=b.x+b.radius;
 
 p.top=p.y;
 p.bottom=p.y +p.height;
 p.left=p.x;
 p.right=p.x+p.width;
//test if there is collision or not
 return b.right>p.left&&b.bottom>p.top && b.left < p.right && b.top<p.bottom;
 
}

*/

//update function for the logic of the game
function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }
    /*
    //test if the ball in player side or computer side
let player =(ball.x<canvas.width/2)? user:com;
if (collision(ball.player)){


}
*/
}



//the main function that will call two function 
//1-drawin function for drawing the objects 
//2-update function for the logic of the game
function game() {
    update();
    drawin();
}
// loop for call the game function 50 times in one second
const framePerSec = 100;
setInterval(game, 1000 / framePerSec);




