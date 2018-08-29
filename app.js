//Single Line Comment

/*
Multi 
Line 
Comment
*/

console.log("Hello, JavaScript!");
console.log("Let's do some math!")
console.log(4 + 7);
console.log(12 / 0);
console.log('Goodbye!');

let a = 3.14; //declaring variable
console.log(a);

const temp1 = 36.19;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3);
//temp3 = 9;


//increment a number variable
let c = 0; //C contains 0
c += 1; //C contains 1
c++; //C contains 2
console.log(c); //Shows 2


//Variable scope = When/ where is the variable available int he program and when can we use it.
let num1 = 0; {
    num1 = 1; //Ok : num1 is declared in the parent block
    const num2 = 0;
    console.log(num1);
}
console.log(num1); //Ok : num1 is declared in the current block


//Template literal
const country = "France";
console.log(`I live in ${country}`); //Shows "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y} `); //Shows "3 + 7 = 10"


//Observe the following outputs
console.log(4 + 5);
console.log("4+5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2;
console.log(g); //Shows NaN which = Not a Number


//Explicit conversion number() or String()
const h = "5";
console.log(h + 1); //Concatenation: Show the string "51"
const i = Number(h);
console.log(i + 1); //Numerical addition: Show the number 6
const j = 6;
console.log("5" + String(j));
console.log(Number("dog"));


//Strictly equality using ===
let num = 0;
let str = '0';

console.log(num === num); //true
console.log(str === str); //true
console.log(num === str); //false
console.log(num == str); //true


//Switch
const p = "abc";
switch (p) {
    case "abc":
        console.log("x = abc");
        //break;
    case "def":
        console.log("x = def");
        break;
    default:
        console.log("Otherwise");
}

