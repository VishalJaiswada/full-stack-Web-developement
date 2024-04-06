// we have already learn about built in objects
// Now we learn about Array 

let numbers=[1,4,5,7];

console.log(numbers);

//insertion in arrray end,begin, middle
//end
numbers.push(9);
console.log("Insertion at end:"+numbers);

//insertion in arrray begin
numbers.unshift(8);
console.log("Insertion at begin:"+numbers);

//insertion in arrray middle
numbers.splice(3,2,'a','b','c'); // where 2 denotes deleted index value after index 3
console.log("Insertion at end:"+numbers);

// searching a value in array by --> indexOf(value)
console.log("4 value to be search:"+numbers.indexOf(4));

// object or reference type in array

let courses=[
    {no:1,naam:'Vishal Patel'},
    {no:2,naam:'Vikas Patel'},
    {no:3,naam:'Priti Patel'}
];
 
// let course=courses.find(function(course){
//     return course.naam==='Vishal Patel';
// });
let course=courses.find(course=> course.naam=='Vishal Patel');
console.log(course);


// Removing elements from array --> end,begin ,middle
let array=[1,2,3,4,5,6,7];
console.log(array);
// end se remove-->pop()
array.pop();
console.log(array);

// beginning se remove-->shift()
array.shift();
console.log(array);

// middle se remove karna ho tab--> splice(index where to start, how many elements)
array.splice(2,2);
console.log(array);

// empty array

let Number=[1,2,3,4,5,6,7,8,9,10];
let Number2=Number;


console.log(Number);
console.log(Number2);

// Number=[]; // Not working for Number2
// Number.length=0; // properly working for Number2 and best way
  Number.splice(0,Number.length); // properly workin for Number2

console.log(Number);
console.log(Number2);