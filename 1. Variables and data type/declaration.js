// IN Js we create variables using let , var , const.
let var1 = 12;
var var2 = 12;
const var3 = 12;

//  Data Types

// there are two type of datatypes in js 1. Primitive 2. Reference 
//  1. Primitive - 1. Number 2. String 3.boolean  4.undefined 5.null 6.symbol 7.bigInt 

// Non - primitive ( reference ) - 1.objects 2.functions 3. arrrays 


// ### PRIMITIVE DATA TYPES  ###
// String: "Hello", 'World' — Any text (inside quotes)
// Number: 10, 3.14, -5 — Whole or decimal numbers
// Boolean: true, false — Yes or No type answers
// Undefined: let x; — Declared but not given any value
// Null: let x = null; — Intentionally empty
// Symbol: Symbol("id") — Unique value (rarely used)
// BigInt: 12345678901234567890n — Very large numbers
// Using let 
let box1 = 12; // number
let name = "goku"; // string
let isTrue = true; // boolean 
let x; // undefined ( declared but no assign value )
let x2 = null;// null
let bigNumber = 123455768766543n;// big int 
console.log(box1);
console.log(name);
console.log(isTrue);
console.log(x);
console.log(x2);
console.log(bigNumber);


// Using var 

var box2 = 12;
let name2 = 'vegeta'
var isFalse = false;
var x1;
var x3 = null;
var bigNumber2 = 123456789098765n;
console.log(box2);
console.log(name2);
console.log(isFalse);
console.log(x);
console.log(x3);
console.log(bigNumber);


// Using const 
const name3 = "gohan";
const box3 = 12;
const boolvar = true;
const x5 = null;


// ### REFERENCE DATA TYPE 
    //1.object 2.array 3. functions

// Object: key-value pairs like { name: 'Krishna', age: 25 }
// Array: List of items like ["Pen", "Book", "Laptop"]
// Function: Reusable block of code like function greet() { console.log("Hello!"); }

let user = { 
    name : "Kala Kabadi",
    cartoonName : "ultra-B",
    age : 30,
}

let numbers = [ 1, 3 , 20  , 1000 , 234, 192 , -1 , 3.54]

let func = ()=>{
    console.log("this is a functions");
    
}


// Type conversoin ( manual ) and Type Coercion ( automatic )

// TYPE CONVERSION 
let num = "124";
let num2 = Number( num );

// TYPE COERCION
let sub = "23235" - 1243;
let sum = "23235" + 1243;

console.log(sub);
console.log(sum);

console.log(typeof(sub));
console.log(typeof(sum));



// Typeof operator - return the type of the data or variables 

let userName = 'Krishna';
let age = 22;
let isSubscribed = true;
let feedback;
let response = null; // the type of null is object.
let secretId = Symbol('id');
let totalPopulation = 7810000000000000000n;

console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof isSubscribed); // boolean
console.log(typeof feedback); // undefined
console.log(typeof response); // object
console.log(typeof secretId); // symbol
console.log(typeof totalPopulation); // bigint


//  When should I use BigInt? -  "Use BigInt for large values beyond Number.MAX_SAFE_INTEGER"