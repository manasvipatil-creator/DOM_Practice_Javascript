console.log("My name is Manasvi");
console.log("I am learning Javascript");
console.log("I am learning React");

/////////////////////////////////////////////////////////
console.log("Start");
setTimeout(function(){
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

setTimeout(function(){
    console.log("hello");
},5000);

/////////////////////////////////////////////////////

function welcome(name){
    console.log("Welcome "+ name);
}

function showUser(pratik){
    pratik(" manu");
}

showUser(welcome);

////////////////////////////////////////////////////
function calculate(a,b,callback){
    let result=a+b;
    callback(result);

}

function display(result){
    console.log("Result is :",result);
}

calculate(10,5,display);

///////////////////////////////////////////////////////

function calculate1(a,b,callback){
    let result=a*b;

    callback(result);

}

function showResult1(result){
    console.log("Multiplication is: ",result);

}

calculate1(5,4,showResult1);


////////////////////////////////////////////////////

function welcome(name){
    console.log("welcome "+name);

}

function process1(callback){
    callback("Manasvi ");
}

process1(welcome);

////////////////////////////////////////////////////
//  callback Hell 

function task1(callback){
    console.log("task 1 completed.");
    callback();
}

function task2(callback){
    console.log("Task 2 Completed");
    callback();
} 

function task3(callback){
    console.log("Task 3 compltetd.");
    callback();

}

task1(function(){
    task2(function(){
        task3(function(){
            console.log("All tasks are completed.");
        });
    });
});


//////////////////////////////////////////////////////////
//Promises 



let promise= new Promise(function (resolve,reject){
    resolve("Task completed");
});

promise.then(function(result){
    console.log(result);
});


let promise1=new Promise(function (resolve,reject){
    reject("task rejected");
});

promise1.then(function(result){
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});

///////////////////////////////////////////////////////////////////
// Promises.all()


let taska =Promise.resolve("Task 1 Completed");
let taskb=Promise.resolve("Task 2 completed");
let taskc=Promise.resolve("Task 3 completed");

Promise.all([taska,taskb,taskc])
.then(function(results){
    console.log(results);
})
.catch(function(error){
    console.log(error);
});



//////////////////////////////////////////////////////////////////////
// Async / Await

function getData(){
    return Promise.resolve("Data received");
}

async function showData() {
    let result= await getData();
    console.log(result);
}

showData();

/////////////////////////////////////////////////////////////////////////////////
 
function getData2(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve ("Data received after 2 seconds");
        },2000);
    });

}

async function showData2() {
    let result= await getData2();
    console.log(result);    
}

showData2();

///////////////////////////////////////////////////////////////////////////////////////