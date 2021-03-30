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





The Firt page in the game 
![firstpage](https://files.slack.com/files-pri/T0351JZQ0-F01STM31351/vid-20210329-wa0008.gif)


After you read the instructer and click start  you will see Our Ping Pong game  components:

* The game board
* Net in the middle
* Two Score text on either side
* Two Paddles, the user and the ai
* And our Ping Pong Ball.



![playtable elemnet](https://files.slack.com/files-pri/T0351JZQ0-F01TH821E72/playrable_-_copy.png)


### preview of the game :
when the game start you can control the user paddle using the mouse when the paddle hit the ball its direction or angle it is depent on where  the paddle hits the ball, and  when the ball hit the paddles its speed increase .



![preview of the game ](https://ga-students.slack.com/files/U01MWHV3VFG/F01SCD8D2SK/ping_pong_game_-_google_chrome_2021-03-30_12-08-12.mp4)


Now Let's BreakDown the Logic and the function behind the game.
### the play table
I create the play table by using canvas elemnt in HTML 5 inside it we will draw the components ,control its and play our game .

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

* Create a render() function and draw the pink game board. 







![](https://ga-students.slack.com/files/U01MWHV3VFG/F01SCD8D2SK/ping_pong_game_-_google_chrome_2021-03-30_12-08-12.mp4)
![]()
![]()
![]()




## Challanges
Challenging! my favorit  and the most fun part is the logic behind the game , when I decide to work on create the game I had no idea that I will had to use sin () and cos() or any kinf of complicated math !  Now I realy appreactiat the time that I spent during Math class.

## Unsolved Problems :
Nothing 


## The winner
the one who score 5 point (you or the computer) before the other will win! be calm there no limit time. Although I doubt you are able to win!

## Some of my favorite functions

collision function , 

```javascript 



```

## Future Features
* Difficulty - Easy | Medium | Hard
* Player Controller - Swipe | Button
* Player Position - Left | Right
* Game Point - 3 to 15
* Player Name - Your Name
* Result Screen
* Settings Panel

