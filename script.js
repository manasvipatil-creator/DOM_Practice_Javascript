
let title=document.getElementById('title');
title.textContent="Welcome to DOM"
title.style.color="red"
console.log(title);


 let title1= document.getElementById('title1');
 title1.textContent="Welcome  to DOM2"
 title1.style.color="blue"
console.log(title1);


let myName=document.getElementById('myName');
myName.textContent="Manu Patil"
myName.style.backgroundColor="yellow"
myName.style.fontSize="30px"
console.log(myName);

let message=document.querySelector('.message');
message.textContent="Hello this is message"
console.log(message);


let message1=document.querySelector('.message1');
message1.textContent="Hello this is message1"
console.log(message1);

let hello=document.querySelector('.hello');
hello.textContent="Hello this is hello"
console.log(hello);

let title2=document.getElementById("title2");
title2.textContent="this is title2"
console.log(title2);

let title4=document.querySelector('#title4');
title4.textContent="this is title 4"
title4.style.color="blue"
console.log(title4);

let message3=document.querySelectorAll('.message3');
message3.forEach(function(message3){
    message3.textContent="I am Learning DOM"
});


let box = document.getElementById("box");

box.innerHTML = `
    <h2>Hello JavaScript</h2>
    <p>I am learning DOM.</p>
    <button>Click Me</button>
`;


let box1=document.getElementById("box1");
box1.style.fontSize="30px"
box1.style.color="blue"

box1.innerHTML=`
<h2>hello</h2>
<p>hello this is a paragraph</p>
<button id="myBtn">Click Me</button>
`;

let button = document.getElementById("myBtn");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.fontSize = "18px";




let name = document.getElementById("name");
let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", function() {

    result.textContent = name.value; 
});

name.removeAttribute("placeholder");


let photo = document.getElementById("photo");
let source = photo.getAttribute("src");
photo.setAttribute("src", "img/image2.jpg");
console.log(source);


let link =document.getElementById("link");
console.log(link.getAttribute("href"));





let id=document.getElementById("manu");

console.log(id.getAttribute("class"));


classList.add()
let box = document.getElementById("box");
box.classList.add("box");
// box.classList.add("active");


box.classList.remove("box");
console.log(box.classList);




let paragraph = document.createElement("p");
paragraph.textContent="Hello javascript";
document.body.appendChild(paragraph);



let manu=document.createElement("p");
manu.textContent="My name is Manasvi";
document.body.appendChild(manu);


let pratik=document.createElement("p");
pratik.textContent="Patil";
document.body.appendChild(pratik);


let title = document.getElementById("title");
// title.remove();
document.body.appendChild(title);


let title5=document.getElementById("title5");

let parent=title5.parentElement;
console.log(parent);


let box =document.getElementById("box2");
console.log(box.children);


let para1=document.getElementById("para1");
let next=para1.nextElementSibling;
console.log(next);

let para2=document.getElementById("para2");
let privious=para2.previousElementSibling;
console.log(privious);