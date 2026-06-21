//alert automaitcally converts any value to the string to show it 

// -----------------------------------------------------------

// STRING CONVRESION

let value = true;
console.log(typeof value);
value = String( value );
console.log(typeof value);

let nullValue = null;
console.log(`The type of nullValue ${typeof nullValue}`);
nullValue = String(nullValue);
console.log(typeof nullValue);

let bigNumber = 12345678n;
console.log(`The type of bigNumber ${typeof bigNumber}`);
bigNumber = String( bigNumber)
console.log(typeof bigNumber);

// --------------------------------------------------------

// NUMERIC CONVERSION

//  numercia conversion in mathematical functions and expression happens automatically

console.log("6" / "2");
console.log("234354" - "324");

let numberString = "1234567";
console.log(`The type of numberString : ${numberString}`);
numberString = Number(numberString);
console.log(`Now after conversion : ${typeof numberString}`);
console.log(numberString);
console.log("Number some vales");
console.log("The number conversion of Null :" + Number(null));
console.log(`The number conversion of undefined : ${Number(undefined)}`);
console.log(`The conversion of true ${Number(true)} anf false ${ Number( false)}`);
console.log(`Number " 2222 " ${Number("  2222 ")}`);
console.log(`Number " 222 2 " ${Number("  222 2 ")}`);
console.log(`123z ${Number("123z")}`);
console.log(`Empty String "": ${Number("")}`);// empty string will always give 0 bcoz its length is 0
console.log(`Empty String " ": ${Number(" ")}`);

//----------------------------------------------------------
//Boolean Conversion 

// 1 => true
// 0 => false
console.log(`Bool of 1 : ${Boolean(1)}`);
console.log(`Bool of 0 : ${Boolean(0)}`);
console.log(`Bool value of string 132ertgf ${Boolean("132ertgf")}`); // any string is true except empty string
console.log(Boolean(""));
// string "0" will be true bcoz it is a non-empty string
console.log(`string with "0" : ${Boolean("0")}`);
console.log(`Boolean(Number("0")) :${Boolean(Number("0"))}`);
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// undefined is not a number
// NaN is considerd as number
// null is an object