
//select the canvas element and set it inside canvas constent
const canvas =document.getElementById("pingpong");

//getContext gives us method and properities to draw the canvas
const context = canvas.getContext("2d");

//fill the paddle
context.fillStyle ="black";

//size the paddle or postion  
context.fillRect(100,200,50,75);


//draw rectangle function  to draw paddles
function drawRec (x,y,w,h,color){
    context.fillStyle= color;
    context.fillRect(x,y,w,h);

}
