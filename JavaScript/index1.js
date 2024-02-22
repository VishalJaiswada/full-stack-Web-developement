// object creation in js

let rectangle ={
    length:7,
    breadth:9,

    area: function(){
        console.log('Area of rectangle:'+rectangle.length*rectangle.breadth);
    }
};
// console.log(rectangle);

// factory function

function createRectangle(length,breadth){
    return rectangle ={
        length:length,
        breadth:breadth,
    
        area: function(){
            console.log('Area of rectangle:'+rectangle.length*rectangle.breadth);
        }
    };
    // return rectangle;  
}

let rectangleObj1=createRectangle(8,9);
let rectangleObj2=createRectangle(5,11);
let rectangleObj3=createRectangle(18,99);


//Camelcase --> numberOfStudents
//constructor function --> Pascal Notation -> NumberOfStudents

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.area=function(){
        console.log('Area of rectangle:'+this.length*this.breadth);
    }
}

//object creation using constructor function
let rectangleObject=new Rectangle(3,7);

// we can add or remove any properties in object

// rectangleObject.color='Pink';
// console.log(rectangleObject);


// delete rectangleObject.color;
// console.log(rectangleObject);


// primitive or value types
let a=10;
let b=a;
a++;
console.log(a);
console.log(b);

//reference types or objects
let num1={value:10};
let num2=num1;
num1.value++;
console.log(num1.value);
console.log(num2.value);

// premitive type another example
/*
let num=100;
function increase(num){
    num++;
};
increase(num);

console.log(num); //ootput is 100 due to copy from num
*/

// reference types or objects another example 

/* 
let ram={value:100};
function increase(ram){
    ram.value++;
};
increase(ram);

console.log(ram.value); // from reference 
*/


// We learn about iterating object
let rec={
    length:5,
    breadth:7
};

// for-in loop
for(let key in rec){
    //keys are reflected through key variable
    //values are reflected through rec[key]
    
    // console.log(key);
    // console.log(rec[key])
    console.log(key,rec[key]);
}


// object cloning iteration,assign,object
 
let src={
    a:100,
    b:200,
    c:300
}; 
/*
// #1 --creating clone using iteration
 
let dest={};

for(let key in src){
    dest[key]=src[key];
}

console.log(dest);
*/

//#2 -- creating clone using assign
let src1={
    value:10,
    bold:20,
    cell:30
}; 

let dest=Object.assign({},src,src1);
src1.a++; // to see the changes occures in destination
console.log(dest);
// console.log(src1);

//#3 --object clone using Spread 
let dest1={...src};
console.log(dest1);