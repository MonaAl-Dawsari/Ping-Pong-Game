
//color #645CD6 #3E34CB
//select the canvas element and set it inside canvas constent
const canvas =document.getElementById("pingpong");

//getContext gives us method and properities to draw the canvas
const context = canvas.getContext("2d");

//fill the paddle
context.fillStyle ="#be4154";

//size the paddle or postion  
context.fillRect(100,200,50,75);


//draw rectangle function  to draw paddles
function drawRec (x,y,w,h,color){
    context.fillStyle= color;
    context.fillRect(x,y,w,h);

}

//draw circle function to draw the ball
function drawCir (){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,true);
    context.closePath();
    context.fill();

}


