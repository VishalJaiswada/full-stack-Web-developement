// console.log("Function Study in JavaScript");

// function call or invoke
run();

// function declaration 
function run(){
    console.log("Running the function");
}
 
// function assignment but function call always after the function assignment
let fruits=function eat(){
    console.log("Eating the fruits");
};
fruits();

// Anonymous function assignment
let OtherFruits=function(){
    console.log("Eating the fruits like guava,mango , Anar etc");
}; 

OtherFruits();

// sum of two numbers
function sum(a,b){
    console.log(arguments);
    return a+b;
}
// function call
//console.log(sum(4,5));
//console.log(sum(4)); //Output: NaN
//console.log(sum());
//console.log(sum(4,5,7,8));

// arguments to store the overflow value of function call
let ans=sum(3,4,5,6,7,8,9);
console.log(ans);

// To Print Sum of All elements present in arguments
function sumOfAll(a,b){
    let total=0;
    for(let value of arguments){
        total+=value;
    }
    return total;
} 

console.log(sumOfAll(1,2,3,4,5));

// Rest Operator--> ... (denoted by three dots)
// To store all values of function parameters, it works like array

function Addition(num1,num2,...args){
    console.log(args);
}

Addition(1,2,3,4,5,6,7,8,9,10);

// Calculate Simple Interest By Default parameters
function interest(p,r=5,y=5){
    return p*r*y/100;
}
console.log(interest(10000,3,5));

// let person={
//     fName:'Vishal',
//     lName:'Jaiswada',
//     age:22
// };

//console.log(person.age,person.fName,person.lName);

// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

// issue in above code only able to read it in fullName()

//Now we will use getter & setter 
//getter--> To access the properties
//setter --> to change or mutate the properties

let person={
    fName:'Vishal',
    lName:'Jaiswada',
    age:22,
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value !== String){
            throw new Error("You have not sent a string");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }

};

//console.log(person.fullName);
//person.fullName='Vikas Patel';


// Learn about Try & Catch:
/*
try{
    person.fullName=0;
}
catch(e){
    alert(e);
}

console.log(person.fullName);

*/

// {
//     var a=5;
     
// }
// console.log(a);

function print(){
    var a=5;
   // console.log(a);
};
//console.log(a);

for(var i=0;i<10;i++){

};
// console.log(i);

if(true){
    // let a=55;  //let cann't be access outside
    // but var will be access in if else case not in function
    var a=55;
}
console.log(a);

// Reducing the array

let arr=[1,2,3,4,5,6];
// let total=0;
// for(let value of arr){
//     total+=value;
// }
// console.log(total);

let totalSum=arr.reduce((accumulator,currValue)=> accumulator+currValue,0);
console.log("Printing Total Sum:");
console.log(totalSum);