//console.log("hello");
//var person = prompt("Hello, whats your name"? " ");
//if (person != null)
var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);

document.getElementById("DropdownMenu1").addEventListener("change", disappear);

function disappear(){
    if(document.getElementById("DropdownMenu1").value == "Square Root"){
    document.getElementById("Number2").style.display = "none";
    }
    else{
    document.getElementById("Number2").style.display = "inline-block";
    }
}
function doMath() {
if  (document.getElementById("DropdownMenu1").value == "Addition"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) + parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
                     
    }

 else if (document.getElementById("DropdownMenu1").value == "Subtraction"){
    var num1 = document.getElementById('Number1').value;
                                               
    var num2 = document.getElementById('Number2').value;
            
    var answer = parseInt(num1) - parseInt(num2);
                          
    document.getElementById('Answer').innerHTML = answer;
                         
     
    }
    
  else if (document.getElementById("DropdownMenu1").value == "Multiplication"){
        var num1 = document.getElementById('Number1').value;
        
        var num2 = document.getElementById('Number2').value;
        
        var answer = parseInt(num1) * parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
                                
    }
    
  else if (document.getElementById("DropdownMenu1").value == "Division"){
        var num1 = document.getElementById('Number1').value;
        
        var num2 = document.getElementById('Number2').value;
        
        var answer = parseInt(num1) / parseInt(num2);
        document.getElementById('Answer').innerHTML = answer;
    }
  
    else if (document.getElementById("DropdownMenu1").value == "Square Root"){
        var num1 = document.getElementById('Number1').value;
        
        var num2 = document.getElementById('Number2').value;
        
        var answer = Math.sqrt(num1);
        document.getElementById('Answer').innerHTML = answer;
    }
    
     else if (document.getElementById("DropdownMenu1").value == "Square"){
        var num1 = document.getElementById('Number1').value;
        
        var num2 = document.getElementById('Number2').value;
        
        var answer = Math.pow(num1, num2);
        document.getElementById('Answer').innerHTML = answer;
    }
    
                                     
                         

}