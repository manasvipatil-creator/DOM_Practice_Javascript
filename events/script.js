let button = document.getElementById("btn");
let message= document.getElementById("message");
button.addEventListener("click",function(){

console.log("Button is clicked");
message.textContent = "Button is clicked";

});


let button1=document.getElementById("btn2");
let title=document.getElementById("title");

button1.addEventListener("click",function(){

title.style.color="red";

message.textContent="color is changed";
console.log("color changed successfully");


});


let clickBtn= document.getElementById("clickBtn");

clickBtn.addEventListener("click",function(event){
    console.log(event.target);
    console.log(event.target.textContent);
    
});



let input = document.getElementById("name");

input.addEventListener("keydown", function(event) {

    console.log(event.key);

});


let form=document.getElementById("myForm");

form.addEventListener("submit",function(event){

event.preventDefault();
console.log("Form Submitted");

});


let input1 = document.getElementById("name1");

let result = document.getElementById("result");

input1.addEventListener("input", function(event) {

    result.textContent = input1.value;

    console.log(input1.value);

});

let city=document.getElementById("city");
let result1= document.getElementById("result");

city.addEventListener("input",function(event){
    city.textContent=city.value;
    console.log(city.value);
   
});

let input3 = document.getElementById("textInput");

input3.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Enter key pressed");
    }
});


let Input4 =document.getElementById("textInput1");

Input4.addEventListener("keyup",function(event){
    console.log(event.key);

});

let title2= document.getElementById("title2");

title2.addEventListener("mouseover",function(){
      title2.style.color = "red";
      title2.style.backgroundColor = "yellow";
    console.log("Mouse is over the heading");
});


let title3=document.getElementById("title3");

title3.addEventListener("mouseout",function(){

title3.style.color="blue";

console.log("Mouse Left the heading");
});



let input5=document.getElementById("name2");
input5.addEventListener("focus",function(){

    console.log("Input is focused.");
});