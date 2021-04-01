# PingPong-game-Mona
ping pong, is a game in which two players (you and the computer) hit a little, light ball back and forth across a table using a small paddle. A point is scored when a player fails to return the ball to the other player.

![PingPong](https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif)


## Technologies used
* Canvas in HTML 5
* Animation by keyfram in CSS3 for the background 
* Use Object-oriented programming (OOP) by Javascript 
* Javascript Dom Manipulation
* Visual Studio Code

## Wireframes and User stories
### Wireframes 
![wireframe](https://files.slack.com/files-pri/T0351JZQ0-F01S47LN0R5/img_20210325_205034.jpg)
### User story
As person who used to enjoy playing computer game when i was child ,I really want to have the experience to play old computer game as ping pong but with lots of color and life so i can enjoy it again


## About development process
* Create New Repository in GitHub Enterprise called PingPong-game-Mona.
* Prepare the Folders and Files for the game.
    - create README.md
    - create index.html

    - create firstpage.html
    - create css folder 
    - create styles.css
    - create another styles.css

    - create js folder
    - create main.js
    - create sounds folder 

I used "visual studio code" as my text editor. and create some folders and file for my project.
I like to organize everything from the beginning. So,I created a folder structure similar to below:
<br>
![Folders and Files](https://files.slack.com/files-pri/T0351JZQ0-F01STFU1AM9/image.png)

* create functions for draw the elements 
- draw the paddles 
```javascript 

//draw rectangle function  to draw paddles
function drawRec(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);

}

```
- draw the ball 
```javascript 

//draw circle function to draw the ball
function drawCir(x, y, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}


```
- draw the the score 
```javascript 
// create function for the score called drawText
function drawText(text, x, y, color) {
    context.fillStyle = color;
    context.font = '50px "Changa", sans-serif';
    context.fillText(text, x, y);
}



```
- draw the net
```javascript 
//draw net function to draw the net
function drawNet() {
    for (let i = 0; i <= canvas.height; i += 20) {
        drawRec(net.x, net.y + i, net.width, net.height, net.color);
    }
}


```
* create object to store the value for each componnent

* work on moving the ball.
* work on collisin 
* update the score 
* control the user paddle 
* create simple AI to control the computer paddle


```javascript 

 //AI to control the computer paddle 
    let comLevel = 0.1;
    com.y += (ball.y - (com.y + com.height / 2)) * comLevel;


```

* add sounds 
* alert message with the winner




### preview of the game : 
The Firt page in the game 
![firstpage](https://files.slack.com/files-pri/T0351JZQ0-F01STM31351/vid-20210329-wa0008.gif)


After you read the instructer and click start  you will see Our Ping Pong game  components:

* The game board
* Net in the middle
* Two Score text on either side
* Two Paddles, the user and the ai
* And our Ping Pong Ball.



![playtable elemnet](https://files.slack.com/files-pri/T0351JZQ0-F01TH821E72/playrable_-_copy.png)



when the game start you can control the user paddle using the mouse when the paddle hit the ball its direction or angle it is depent on where  the paddle hits the ball, and  when the ball hit the paddles its speed increase .







## Challanges
Challenging! my favorit  and the most fun part is the logic behind the game , when I decide to work on create the game I had no idea that I will had to use sin () and cos() or any kinf of complicated math !  Now I realy appreactiat the time that I spent during Math class.

## Unsolved Problems :
Nothing 


## The winner
the one who score 5 point (you or the computer) before the other will win! be calm there no limit time. Although I doubt you are able to win!

## Some of my favorite functions



```javascript 

//collision function
function collision(b, p) {//b for ball , p for player
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


```
Here we are first taking all the sides like the top, right, bottom, and left for our ball and player. Our player object is going to be either user or com. This depends on which paddle the ball hits.

After determining all the sides, we do the calculation. by working on this function I had lots of bugs and i had hard time to figer out the true calclation that's why it is my Favorite.
## Future Features
* Difficulty - Easy | Medium | Hard
* Player Controller - Swipe | Button
* Player Position - Left | Right
* Game Point - 3 to 15
* Player Name - Your Name
* Result Screen
* Settings Panel

## Demo for the game
https://pages.git.generalassemb.ly/monaaldaw/PingPong-game-Mona/ 

## presntatatin 
inside the folder presentation.