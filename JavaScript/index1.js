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

rectangleObject.color='Pink';
console.log(rectangleObject);


delete rectangleObject.color;
console.log(rectangleObject);