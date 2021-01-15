var usertxt = document.getElementById("user");
var passtxt = document.getElementById("pass");
var btn = document.getElementById("btn");

btn.addEventListener("click", logIn);

function logIn(){
    var x = document.getElementById("demo");
    if((usertxt.value == "") && (passtxt.value == "")){
       x.innerHTML = "Enter user name and password!";
       x.style.color = "red";
    }
    else if((usertxt.value != "") && (passtxt.value == "")){
       x.innerHTML = "Enter the password!";
       x.style.color = "red";
    }
    else if((usertxt.value == "") && (passtxt.value != "")){
       x.innerHTML = "Enter user name!";
       x.style.color = "red";
    }
    else{
       x.innerHTML = "Logged in successfully!";
       x.style.color = "green"; 
    }
   
}
