"use strict";
function addition(x, y) {
    return x + y;
}
console.log(addition(2, 2));
let substraction;
substraction = (x, y) => { return x - y; };
console.log(substraction(2, 6));
function power(x, n = 2) {
    return Math.pow(x, n);
}
console.log(power(4));
console.log(power(2, 5));
function fullName(firstName, lastName) {
    if (lastName) {
        console.log(firstName + " " + lastName);
    }
    else {
        console.log(firstName);
    }
}
fullName("Ann", "Smith");
fullName("Robert");
function printAll(...items) {
    for (let i in items) {
        console.log(items[i]);
    }
}
printAll(1, 2, 3, 4);
