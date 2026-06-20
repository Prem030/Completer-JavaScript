// Data Types

// 1. NUMBERS 

let num = 12;
let PI = 3.14;
let negativeNumber = -12;
console.log(num)
console.log(PI);
console.log(negativeNumber);

// SPECIAL numeric values
let infinityNum = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

console.log(notANumber);
console.log(infinityNum);
console.log(1 / 0);

// Nan represents a computational error 
// when you try to perform mathematical operaton with non maths operadns 
console.log("this is string" / 2);
console.log("this is string a" * " this is string 2");

//BIGINT
// 1. we need big int to store number greater than normal integer value.
// 2. In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
// 3. To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage
let veryBigNumber = 123456789098765432n;
console.log(9007199254740991 + 5); // 9007199254740996
console.log(9007199254740991  + 4); //9007199254740996

//********************************************************************************************************************************* */

//  ---------------- 2. STRING ------------------------------------

let name = "Prem Dhara";
let sentence = " a quick brown fox jumps over the little lazy dog";
let sentence2 = 'single quotes are ok too';
// Backticks: `Hello` use to embed varaiables and expressoin into a string by wrapping then in ${....} as shown above.
let sentenceWithValue = `The current user is ${name}`;

console.log(name);
console.log(sentence);
console.log(sentence2);
console.log(sentenceWithValue);



// ***********************************************************************************************************************************

// ---------------------- 3. Boolean ------------------------

// it represent only two values 1.true 2. false
let booleanValue1 = true;
let booleanValue2 = false;

console.log(booleanValue1);
console.log(booleanValue2);

// ***********************************************************************************************************************************

//  -----------------------4.UNDEFINED --------------------------

// when we create a variable but didn't initilize it 
let x;
console.log(x);

// ***********************************************************************************************************************************

// --------------------------- 5.NULL ----------------------

// when we create a variable but want to be empty we want variable to hold nothing to represent we use null
// now box1 we want it to empty or we can say we want to store nothing in box1
// but box 2 is like we forget to give vaule to box or we can say we didn't know what kind of value we want to store in box2

let box1 = null;
let box2;
console.log(box1);
console.log(box2);


// ******************************************************************************************************************************

// -------------------- objects ------------------------------

let user = { 
    name : "prem",
    email : " premdh8@gmailcom",
    age : 24,
}


// TYPEOF operator : return the type of the operand
typeof undefined // "undefined"

// typeof 0 // "number"
// typeof 10n // "bigint"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  (1)
// typeof null // "object"  (2)
// typeof alert // "function"  (3)
let var1 = 10; console.log(typeof var1);
let var2 = 10n; console.log(typeof var2)
let var3 = true; console.log(typeof var3);
let var4 = "str";   console.log(typeof var4);
let var5 = Math; console.log(typeof var5);
let var6 = null; console.log(typeof var6); // type of null is object which is a bug of original js 
let var7; console.log(typeof var7);
// let var8 = alert(); console.log(typeof var8);
let var9 = user; console.log(typeof var9);



// SUMMERY
// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1)
// .
// bigint for integer numbers of arbitrary length.

// string for strings. A string may have zero or more characters, there’s no separate single-character type.

// boolean for true/false.

// null for unknown values – a standalone type that has a single value null.

// undefined for unassigned values – a standalone type that has a single value undefined.

// symbol for unique identifiers.

// And one non-primitive data type:

// object for more complex data structures.

// The typeof operator allows us to see which type is stored in a variable.
// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.