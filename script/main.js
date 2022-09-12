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
