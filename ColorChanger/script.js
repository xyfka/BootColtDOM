var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function(){
    if(body.style.backgroundColor !== "purple"){
    body.style.backgroundColor = "purple";
    } else 
    body.style.backgroundColor = "white";
});