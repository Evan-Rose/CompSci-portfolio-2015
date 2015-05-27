/**
* Created with Shrek Simulator.
* User: SuperPowerDonkey
* Date: 2015-02-25
* Time: 06:23 PM
* To change this template use Tools | Templates.
*/
 //Work in Progress!
$(document).ready(function(){
//instructions
document.getElementById("count").innerHTML = "Click Shrek a scrub to earn points and buy more things. Buy everything to win!";

//these functions count up the code and have different effects
//this adds one point whenever you click//
   var airHorn=new Audio('')
    var counter = 0
    function countUpByOne(){
        counter=counter+1 * multiplier;
        return counter
    }  
    var multiplier = 1
    //this subtracts 100 points when you buy sunglasses
    function subtractOnehundred(){
        counter=counter-100
        return counter
    }
    //this will subtract 1000 points when you buy the hat
    function subractOneK(){
        counter=counter-1000
        return counter
    }
    function subtractTenK(){
        counter=counter-10000
        return counter
    }

//this counts up by one
    $('#button').click(function(){
        $('#count').html(countUpByOne) 
    });
    
    //activates the css so it will hide the button and show the sunglasses
    $('#dankButton').click(function(){
        if(counter>=100){
            $('#dankShades').css('visibility','visible')
            $('#dankShades').animate({top:"85px"}, 5000);
            $('#dankButton').css('visibility','hidden')
            multiplier = 5
        }
    });
    
  //looks for when you have 100 points to buy it then subrtacs 100
    $('#dankButton').click(function(){
        if(counter>=100){
        $('#count').html(subtractOnehundred)
        }
    });
    
   $('#dankButton').click(function(){
        if(counter>=0){
      $('#dankerButton').css('visibility','visible')
        }
    });
    
      
    $('#dankerButton').click(function(){
        if(counter>=1000){
            $('#dankHat').css('visibility','visible')
            $('#dankHat').animate({top:"170px"},5000)
        }
    });
    $('#dankerButton').click(function(){
        if (counter>=1000){
            $('#count').html(subractOneK)
            $('#dankerButton').css('visibility','hidden')
            $('#dankestButton').css('visibility','visible')
            multiplier = 50
        }
    });
    
    $('#dankestButton').click(function(){
        if(counter>=10000){
    $('#count').html(subtractTenK)
    $('#dankestButton').css('visibility','hidden')
    $('#dankDance').css('visibility','visible')
    $('#dankDance').animate({left:"673px"},5000)
            multiplier = 500
    }
    });
    $('dankestButton').click(function(){
        if(counter>=100000){
   $('#illuminati').css('visibility','visible')
        }
    });
   
     
});


       