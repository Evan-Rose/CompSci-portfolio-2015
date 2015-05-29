/**
 * Created with Comp Sci Portfolio.
 * User: SuperPowerDonkey
 * Date: 2015-05-28
 * Time: 06:17 PM
 * To change this template use Tools | Templates.
 */

function start() {}
document.addEventListener("keydown", function(evt) {
    if(evt.keyCode == 87) {
        hero.moveUp = true;
    }
    if(evt.keyCode === 83) {
        hero.moveDown = true;
    }
    if(evt.keyCode === 65) {
        hero.moveLeft = true;
    }
    if(evt.keyCode === 68) {
        hero.moveRight = true;
    }
});
document.addEventListener("keyup", function(evt) {
    if(evt.keyCode === 87) {
        hero.moveUp = false;
    }
    if(evt.keyCode == 83) {
        hero.moveDown = false;
    }
    if(evt.keyCode === 65) {
        hero.moveLeft = false;
    }
    if(evt.keyCode === 68) {
        hero.moveRight = false;
    }
});
var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
// context.fillStyle = "#FF0000";
// context.fillRect(20,60,150,75);
var hero = {
    moveUp: false,
    moveDown: false,
    moveLeft: false,
    moveRight: false,
    xPos: 10,
    yPos: 20,
    move: function() {
        if(this.moveUp) {
            this.yPos -= 5;
        }
        if(this.moveDown) {
            this.yPos += 5;
        }
        if(this.moveLeft) {
            this.xPos -= 5;
        }
        if(this.moveRight) {
            this.xPos += 5;
        }
    },
    draw: function() {
        context.beginPath();
        context.arc(this.xPos, this.yPos, 10, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
    }
}

    function gameLoop() {
        hero.move();
        refresh();
        window.requestAnimationFrame(gameLoop);
    }
gameLoop();

function refresh() {
    context.clearRect(0, 0, c.width, c.height);
    hero.draw();
}