// line below is used to print on the console window
console.log('This is JS Version 3.0');
let a=5;
console.log(a);
let lastName ="Jai Shree Ram";
console.log(lastName);
let name1='Jai Seeta Ram';
console.log(name1);
var name2='Sankat Mochan hanuman';
console.log(name2);
const num=5.5;
console.log(num);

a="Vishal Jaiswada";
console.log(a);

let person={
    firstName:'Vishal',
    age:22
};

console.log(person);
console.log(person.age);
console.log(person['firstName']);

let num1=2;
let num2=5;
let c=num1+num2;
console.log(c);
c=num1**num2;
console.log(c);
c=num1%num2;
console.log(c);

let age=22;

let status1=(age>=18)?'Yes Vote':'No Vote';
console.log(status1);

let marks=55;
if(marks>=90){
    console.log('A');
}
else if(marks>=80){
    console.log('B');
}
else if(marks>=70){
    console.log('C');
}
else if(marks>=60){
    console.log('D');
}
else if(marks>=50){
    console.log('E');
}
else{
    console.log('F');
}

let number=2;
switch(number){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}