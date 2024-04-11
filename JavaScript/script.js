// Write a function for factorial operations

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

// Test cases for factoriaL

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// give me a code for merge sort functions

function mergeSort(arr) {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);
        mergeSort(left);
        mergeSort(right);
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[k] = left[i];
                i++;
            }
            else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
        }
        
        return arr;
    }
    else {
            return arr;
        }
    }

    // Test cases for merge sorting
    console.log(mergeSort([5, 4, 3, 2, 1]));
    console.log(mergeSort([1, 2, 3, 4, 5]));
    console.log(mergeSort([5, 4, 3, 2, 1, 0]));
    console.log(mergeSort([0, 1, 2, 3, 4, 5]));
    console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
    
// Give me a code for sum of two numbers

function sum(a, b) {
    return a + b;
}

// Test cases for sum

console.log(sum(1, 2));
console.log(sum(2, 3));
console.log(sum(3, 4));
console.log(sum(4, 5));
console.log(sum(5, 6));


let messsage="This is my classroom";
let words=messsage.split(' ');
console.log(words);
let lastName="Patel Ji";
let messsage2=`Hello ${lastName},
               Thanks for the Opportunity
               Regards,
               Vishal Patel`;

console.log(messsage2);