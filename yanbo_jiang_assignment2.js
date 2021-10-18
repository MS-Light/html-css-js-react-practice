// let str = 'JavaScript String split()';
// let substrings = str.split(' ');

// console.log(substrings);

// const test = "abf,3er ert"; 
// let array = test.split(/[, ]/);


// console.log(array);

// let email = 'admin@example.com'; 
// console.log(email.includes("@"));

// let languages = ['C', 'C++', 'Java', 'JavaScript']; 
// languages.splice(1, 0, 'Python');
// console.log(languages);

// const myReduce = (array, callback, initValue) => {
//     let accumulator = initValue === undefined ? 0 : initValue; for (let i = 0; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i], i, array);
//     };
//     return accumulator;
// };


// let numbers = [1,2,3,4,5];
// numbers.reduce((accumulator, current, index, numbers) => { 
//     return accumulator + current;
// }, 1);

// console.log(numbers.reduce((accumulator, current, index, numbers) => { 
//     return accumulator + current;
// }, 0))

////////////////////////////////////Question1////////////////////////////////
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
   ];

const newItems1 = itemsObject.slice();

// newItems1.forEach(element => {
//     element.quantity *= 2;
//     element.price *= 2;
// });

// console.log(newItems1);

console.log(newItems1.map(({quantity, price}) => {
    return {
        quantity: quantity*2,
        price: price*2
    };
})
);
////////////////////////////////////Question2////////////////////////////////
const newItems2 = itemsObject.filter(ele => {
    return ele.quantity >2 && ele.price > 300;
})

console.log(newItems2);

////////////////////////////////////Question3////////////////////////////////

console.log(itemsObject.reduce((acc, {price}) => {
    return acc + price;
}, 0)
);

////////////////////////////////////Question4////////////////////////////////
const string =
 ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

const ans = string.trim().replace(/\s+/g, ' ').split(/[ ,-]/).join(' ').toLocaleLowerCase();
console.log(ans);