/**
 * Created with Comp Sci Portfolio.
 * User: SuperPowerDonkey
 * Date: 2015-05-28
 * Time: 06:17 PM
 * To change this template use Tools | Templates.
 */
    document.addEventListener("keydown", function(evt){
        if(evt.keyCode === 87){
            hero.moveUp = true;
        }
    });
    document.addEventListener("keyup", function(evt){
        if(evt.keyCode === 87){
            hero.moveUp = false;
        }
    });
document.addEventListener("keydown",function(evt){
    if(evt.keyCode === 83){
        hero.moveDown = true;
    }
});

document.addEventListener("keydown",function(evt){
    if(evt.keyCode === 83){
        hero.moveDown = false;
    }
});


var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
// context.fillStyle = "#FF0000";
// context.fillRect(20,60,150,75);
var hero = {
    moveUp: false,
    moveDown: false,
    xPos: 10,
    yPos: 20,
    move: function(){
        if(this.moveUp){
            this.yPos -= 5;
        }
        var hero = {
            moveDown: false,
            moveUp: false,
            xPos: 10,
            yPos: 20,
            move: function(){
                if(this.moveDown){
                    this.yPos += 5;
                }
            }
        }
    }
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



function gameLoop(){
    hero.move();
    hero.draw();
    
    
    window.requestAnimationFrame(gameLoop);
}
gameLoop();