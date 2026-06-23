// There are four logical operators in Js 
// 1. OR ( || ) 
// 2. AND  ( && )
// 3. NOT ( ! )
// 4. NULLISH ( ?? )


// --------------------------------------------------------

// OR 
let a , b;
let orReslut1 = a || b;
// if one operand / output is high / on / true then the output of the expression is also high / on / true

console.log( true || true ); // true
console.log(false || true ); // true
console.log(true || false ); // true
console.log(false || false ); // false

// if an operand is not boolean , it's converted to a boolean for the evaluation.
console.log(`"" || "0" :  ${"" || "0"}`);

let hour = 12;
let isWeekend = true;

if( hour < 10 || hour > 18 || isWeekend){
    console.log("the office is closed "); // the offcie is closed bcoz the one input is true then output is true.
}

// Another use of ||

