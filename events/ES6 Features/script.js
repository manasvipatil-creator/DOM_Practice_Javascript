let fruits=["Apple","Mango","Banana"];       //ARRAY destructing
let [fruit1,fruit2,fruit3]=fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);



let user={                        //object destructing
    name:"manu",
    age:22,
    city:"kolhapur"
};

let{name,age,city}=user;

console.log(name);
console.log(age);
console.log(city);


let employee={
    name1:"Rahul",
    age1:25,
    role:"Developer"
};

let{name1,age1,role}=employee;

console.log(name1);
console.log(age1);
console.log(role);

let product={
    pname:"Laptop",
    price:40000,
    brand:"hp"
};

let{pname,price,brand}=product;

console.log(pname);
console.log(price);
console.log(brand);

let students=["std1","std2","std3","std4"];    //ARRAY destructing
let[std1,std2,std3,std4]=students;

console.log(std1);
console.log(std2);
console.log(std3);
console.log(std4);


let fruitss=["Apple","Mango","Banana","Ornage"]      //Spread Operator ... in array copy
let newfruitss=[...fruitss];
console.log(newfruitss);




let fruits1=["Mango1","Banana1","Apple1"];                 // Spread Operator in array...(दोन Arrays Combine करणे)
let vegetables=["Potato","Tomato"];

let items=[...fruits1,...vegetables,...students];
console.log(items);



let users={                           //spread operator in object copy
    name2:"manuu",
    age:25
};

let newUsers={
    ...users

};
console.log(newUsers);


let employees={              //spred operator ... (Object मध्ये नवीन property add करणे)
    name:"Pratik",
    age:24
};

let newemployees= {
    ...employees,
    city:"Kameri"
};

console.log(newemployees);


let frontend=["HTML","CSS","Javascript"];     
let backend=["Java","Spring Boot"];

let fullstack=[
    ...frontend,
    ...backend
];

console.log(fullstack);



let family={
    mummy:"Pratibha",
    papa:"Anandrao",
    brother:"Pratik"
};

let newfamily={
    ...family,
    me:"manu"
}

console.log(newfamily);



function add(...numbers) {

    console.log(numbers);

}

add(10, 20, 30, 40);


let fruitsname=["Apple","Mango","Banana","Orange"];            //array madhe Rest 

let[first,...reamining]=fruitsname;

console.log(first);
console.log(reamining);


let username={
    name2:"manasvi",
    age:25,
    city:"kolhapur",
    skill:"Javascript"
};

let{name2, ...otherDetails}=username;

console.log(name2);
console.log(otherDetails);


//default parameter
function greet(name="Guest"){
    console.log(`Hello ${name}`);
}
 greet("Manasvi");
 greet();

 let user3={
    name:"Manasvi",
    address:{
        city:"kolhapur"
    }
 };
 console.log(user3.name.address?.city);




 