let x: number = 10;
x = 25;

console.log(x);

//inference x annotation
let y = 12; //inference
let z: number = 12; //annotation

//types
let firstName: string = 'Tathy';

console.log(typeof firstName);
console.log(firstName);

//object
const myNumbers: number[] = [1, 2, 3];

console.log(typeof myNumbers);
console.log(myNumbers);
console.log(myNumbers.length);

myNumbers.push(5);
console.log(myNumbers);

//tuple
let myTuple: [number, string, string[]];

myTuple = [5, 'test', ['a', 'b']];
console.log(myTuple);

//object literals -> {prop: value}
const user: { name: string; age: number } = {
	name: 'Ivan',
	age: 46,
};
console.log(user);
console.log(user.name);

//any
let a: any = 0;

a = 'test';
a = 24;
a = true;
console.log(a);

//union type
let id: string | number = '10';

id = 200;
console.log(typeof id);
id = 'Liz';
console.log(typeof id);

//type alias -> easier way of calling a union type - giving a alias to it
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = '0001';

//enum
enum Size {
	S = 'Small',
	M = 'Medium',
	L = 'Large',
}

const shirt = {
	name: 'yellow shirt',
	size: Size.M,
};
console.log(shirt);

//literal types
let test: 'authenticated' | null;
test = 'authenticated';
test = null;

//functions
function sum(a: number, b: number) {
	return a + b;
}
console.log(sum(12, 22));

function sayHelloTo(name: string): string {
	return `Hello ${name}`;
}
console.log(sayHelloTo('Enrico'));

function logger(msg: string): void {
	console.log(msg);
}
logger('test');

function greeting(name: string, greet?: string): void {
	if (greet) {
		console.log(`Hello ${greet} ${name}`);
		return;
	}
	console.log(`Hello ${name}`);
}
greeting('Nina');
greeting('Greg', 'Sir');

//interfaces
interface MathFunctionParams {
	n1: number;
	n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
	return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
	return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
	n1: 5,
	n2: 10,
};
console.log(multiplyNumbers(someNumbers));

//narrowing
function doSomething(info: number | boolean) {
	if (typeof info === 'number') {
		console.log(`The number is ${info}`);
		return;
	}
	console.log("I didn't receive any number");
}
doSomething(5);
doSomething(true);

//generics
function showArraysItems<T>(arr: T[]) {
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
	name;
	role;
	isApproved;

	constructor(name: string, role: string, isApproved: boolean) {
		this.name = name;
		this.role = role;
		this.isApproved = isApproved;
	}

	showUserName() {
		console.log(`The user name is ${this.name}`);
	}

	showUserRole(canShow: boolean): void {
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
