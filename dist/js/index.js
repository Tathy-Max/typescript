"use strict";
let x = 10;
x = 25;
console.log(x);
//inference x annotation
let y = 12; //inference
let z = 12; //annotation
//types
let firstName = 'Tathy';
console.log(typeof firstName);
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(typeof myNumbers);
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
//tuple
let myTuple;
myTuple = [5, 'test', ['a', 'b']];
console.log(myTuple);
//object literals -> {prop: value}
const user = {
    name: 'Ivan',
    age: 46,
};
console.log(user);
console.log(user.name);
//any
let a = 0;
a = 'test';
a = 24;
a = true;
console.log(a);
//union type
let id = '10';
id = 200;
console.log(typeof id);
id = 'Liz';
console.log(typeof id);
const userId = 10;
const productId = '0001';
//enum
var Size;
(function (Size) {
    Size["S"] = "Small";
    Size["M"] = "Medium";
    Size["L"] = "Large";
})(Size || (Size = {}));
const shirt = {
    name: 'yellow shirt',
    size: Size.M,
};
console.log(shirt);
//literal types
let test;
test = 'authenticated';
test = null;
//functions
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 22));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Enrico'));
function logger(msg) {
    console.log(msg);
}
logger('test');
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
        return;
    }
    console.log(`Hello ${name}`);
}
greeting('Nina');
greeting('Greg', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
//narrowing
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`The number is ${info}`);
        return;
    }
    console.log("I didn't receive any number");
}
doSomething(5);
doSomething(true);
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`The user name is ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`The user role is: ${this.role}`);
            return;
        }
        console.log('security information');
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
