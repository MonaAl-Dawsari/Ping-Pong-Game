// net color #77887a

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


function game (){
    drawin ();
}

const framePerSec =100;
setInterval(game,1000/framePerSec);











