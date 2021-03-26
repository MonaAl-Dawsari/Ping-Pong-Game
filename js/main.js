

//select the canvas element and set it inside canvas constent
const canvas =document.getElementById("pingpong");

//getContext gives us method and properities to draw the canvas
const context = canvas.getContext("2d");

//create object for User Paddle
const user = {
    x : 0, // left side of canvas
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 20,
    height : 120,
    score : 0,
    color : "#be4154"
}


// create object for Computer Paddle
const com = {
    x : canvas.width - 20, // - width of paddle
    y : (canvas.height - 100)/2, // -100 the height of paddle
    width : 20,
    height : 120,
    score : 0,
    color : "#bf6d40"
}


// create object for  the Ball 
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    color : "#77887a"
}


//draw rectangle function  to draw paddles
function drawRec (x,y,w,h,color){
    context.fillStyle= color;
    context.fillRect(x,y,w,h);

}

//draw circle function to draw the ball
function drawCircle (){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,false);
    context.closePath();
    context.fill();

}


// invoke draw rect fanction to draw user's paddle
drawRec(user.x, user.y, user.width, user.height, user.color);

//  invoke draw rect fanction to draw computer's paddle
drawRec(com.x, com.y, com.width, com.height, com.color);

// invoke draw rect fanction to draw the ball
drawCircle(ball.x, ball.y, ball.radius, ball.color);