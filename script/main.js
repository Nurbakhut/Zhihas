"use strict";
let a = 5 + +5;
console.log(a);
let myname = "Nurbakhut";
let surmame = " Zhumashev";
console.log(myname + surmame);
console.log(typeof a);
function Plus(a, b) {
	return a + b;
}
console.log(Plus(5, 7));
console.log(Plus(10, 5));
let obj = {
	name: "nur",
	sayHello() {
		console.log(obj.name);
	},
};
obj.sayHello();
let b = 5;
b = "101";
console.log(b);
let obj1 = { user: "nur" };
let obj2 = { user: "nur" };
console.log(obj1 === obj2);
let arr = ["ali", "star", "lol"];
console.log(arr[1]);
