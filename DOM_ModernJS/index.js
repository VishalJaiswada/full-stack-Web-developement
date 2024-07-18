

// document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
// });


// let content =document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     console.log(event);
// });


// let links = document.querySelectorAll('a');
// let thirdLink =links[2];

// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('bahut maza aaya ji');
// })


// adding 100 paragraphes

const t1=performance.now();
for(let i=1;i<=100;i++){
    let newElement =document.createElement('p');
    newElement.textContent='This is para '+i ;
    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log("This took: "+(t2-t1)+"ms");

//optimizing little bit to add 100 para via creating a div element

const t3=performance.now();
let myDiv =document.createElement('div');
 
for(let i=1;i<=100;i++){
    let newElement =document.createElement('p');
    newElement.textContent = 'This is para '+ i ;
    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);
const t4=performance.now();
console.log("This took: "+(t4-t3)+"ms");