let numbers = [1,2,3,4,5];
console.log(numbers);

// insert number at the end into numbers array
numbers.push(7);
console.log(numbers);

// insert number at the beginning into numbers array
numbers.unshift(11);
console.log(numbers);

// insert number at the middle into numbers array
numbers.splice(2,0,'a','b','c');
console.log(numbers);

// searching a value in array by --> indexOf(value)

console.log(numbers.indexOf(77));

console.log(numbers.includes(7));

console.log(numbers.indexOf(5,2));

//Working on object or reference type

let courses=[
    {no:1,naam:'Vishal Patel'},
    {no:2,naam:'Vikas Patel'},
    {no:3,naam:'Priti Patel'}
];
console.log(courses);

// let course =  courses.find(function (course) {
//     return course.naam==='Vishal Patel';
// }
// )
let course =  courses.find(course=>
     course.naam==='Vishal Patel'
)
console.log(course);

// Removing Element from array

let array=[1,2,3,4,5,6,7];
console.log(array);

// end se remove-->pop()

array.pop();
console.log(array);

// beginning se remove-->shift()

array.shift();
console.log(array);

// middle se remove-->splice(index,deleted elements)
array.splice(3,array.length - 1);
console.log(array);

// Combinig and slicing the array

let first = [10,20,30];
let second = [40,50,60,70];

let combined = first.concat(second);
console.log(combined);

let sliced = combined.slice(1,3);
console.log(sliced);

// Spread operator
let num1=[1,2,3,4];
let num2=[5,6,7,8,9];
let combined1=[...num1,...num2];
console.log(combined1);
let combined2=[...num1,'a','b',...num2,true,false];
console.log(combined2);

// Iterating an array

// let array1=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<array1.length;i++){
//     console.log(array1[i]);
// }

// using for-of
let arr=[10,20,30,40,50,60,70];
// for(let val of arr){
//     console.log(val);
// }
//using for-Each
arr.forEach(function(number){
    console.log(number);
})

// arr.forEach(value=>console.log(value));

// Joining the array
let numberrs=[10,20,30,40,50];
let joined=numberrs.join(',');
console.log(joined);

// for split
let messg='This is my first msg';
let parts=messg.split(' ');
console.log(parts);

// Sorting the arrays
let nums=[40,50,20,10,70];
nums.sort();
console.log(nums);

nums.reverse();
console.log(nums);

// Filtering of array

let arr1=[1,2,3,-1,-2];
// let filtered=arr1.filter(function(value){
//     return value>0;
// });
// console.log(filtered);

let filtered=arr1.filter(value=>value>0);
console.log(filtered);

// Mapping Arrays
let students=[1,2,3,4,5];
// let mapped=students.map(value=>'Student_no.'+value);
// console.log(mapped);

let mapped=students.map(function(value){
    return 'Student_no.'+value;
});
console.log(mapped);

//  Mapping With Object

let EmpGrade=[1,2,3,4,5,-1,-2,7,9];
let positionGrade=EmpGrade.filter(function(value){
    return value >=0;
});
let Empmapped=positionGrade.map(function(value){
    return {employee:value};
});
console.log(Empmapped);

// let EmpGrade=[1,2,3,4,5,-1,-2,7,9];
// let EmpMapped=EmpGrade.filter(value=> value>=0).map(num=>{employee:num});
// console.log(EmpMapped);