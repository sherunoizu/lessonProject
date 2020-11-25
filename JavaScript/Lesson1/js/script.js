"use strict";

const arr = [11,2,13,10,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b) {
    return a-b;
}
// // arr[99] = 0;
// // // console.log(arr.length);

// // arr.forEach(function(item,i,arr) {
// //     console.log(`${i}: ${item}, внутри массива ${arr}`);
// // });


// // //Конец массива
// // arr.pop();
// // arr.push(10);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

