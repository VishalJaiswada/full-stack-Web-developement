// console.log("DOM class-4");

// synchronous code example

// function sync(){
//     console.log("First");
// }
// sync();
// console.log("Second");

//Asynchronous code example 

// setTimeout(function(){
//     console.log("Third");
// },3000);

 
// API example and usage example

// Sync code

// let meraPromise = new Promise(function(resolve,reject){
//     console.log('I am inside promise');
//      resolve(1998);
// }
// );

// console.log('Pehla');

// Async code
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise 1');
//     },5000);
//     // resolve(1998);
//    // reject(new Error('Error Fetched in execution'));
// }
// );

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise 2');
//     },3000);
//     // resolve(1998);
//     //reject(new Error('Error Fetched in execution'));
// }
// );

// console.log('Pehla');


// then() for value  and catch() for error

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise 1');
//     },5000);
//      resolve(1998);
//    // reject(new Error('Error Fetched in execution'));
// }
// );

// meraPromise1.then((value)=>{console.log(value)});


// let vada1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("setTimeout1 started");
//     },2000);
//     resolve(true);
// });

// vada1.then(()=>{
//     let vada2=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("setTimeout2 started");
//         },3000)
//         resolve("vada2 resolved");
//     })
//     return vada2 ;
// }).then((value)=>{console.log(value)});


// Async function creation 

// async function abcd(){
//    // return 7;
//    return "Vishal Ji" ;
// }

// for multiple function creation using async function


// async function utility(){

//     let delhiMausam = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Delhi me bahut garmi hai");
//         }, 5000);
//     })
    
//     let MaharashtraMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Maharashtra me cool mausam hai");
//         },7000);
//     })
      
//     // we can use await method to stop another exectution till its completed
 
//     let dM =  delhiMausam ;
//     let mM =  MaharashtraMausam ;

//     return [dM,mM];
// }


// Fetch API 
 
async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json();
    console.log(output);
}
utility();
