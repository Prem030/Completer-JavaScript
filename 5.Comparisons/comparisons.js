// Comparisons operators - we ge result in boolean
// > ,< - greater/less than 
// >= , <= greater/less than or equals 
// == , equality 
// ===  strict equality
// != - not quals
// !== 

console.log(2> 1); // true
console.log( 2 > 3); // false
console.log( 2 == 3 ); // false


// --------------  string comparison -------------------

// JavaScript uses dictionary order to compare strings

console.log(` Z > A : ${ 'Z' > 'A'}`);
console.log(`can > cat : ${'can' > 'cat'}`); // false bcoz can came before  cat in dictionary
console.log('a' + 1 > 'A'); //true 'a1' > 'A'
console.log(`A1 > A0 : ${ 'A1' > 'A0'}`); // true
console.log(`A0 > A1 : ${ 'A0' > 'A1'}`); //false

console.log(`A == a : ${ 'A' == 'a'}`); // false bczo A and a have different ascii code. 

// -------------- conparison of different types ------------


console.log('2' > 1) ;// true bcoz '2' will convert into number 
console.log('00001' == 1 ); //also true

// as  use can see we get both vales true while '2' and 1 aret two different type some times we need to check like this in js bcoz some function return numbers as string and some retunr as only number so main the code we have "==="

// === it will check the values are same and also the type fo the operands.

console.log(`'2' === 1 : ${ '2' === 1}`); // false  bcoz string type is not equal to number
console.log(`0 == false : ${ 0 == false }`); // true
console.log(`0 === false :${ 0 === false }`); // false


// ---------------------- comparison with null and undefined--------------

console.log(` null === undefined : ${ null === undefined}`);// false
console.log(` null == undefined  :${null == undefined}`); // true

// 1 is false and 2 is true bcoz == turn them into numberic value which is 0 while === also check the type of null and defined (null -> object , undefined -> undefined)


// STRANGE result : null vs 0 

console.log(`null > 0 : ${ null > 0 }`);   // false 1
console.log(`null == 0 : ${ null == 0 }`); // false 2
console.log(`null >= 0 : ${ null >= 0 }`); // true  3
 
// == and < > >= <= work differently. conversion ( > < >= <=) -> convert null into 0. that's why null >= 0 is true bcoz it turn null into 0 and null > 0 false bcoz null convert into 0. -> 0 > 0.

console.log(`undefined > 0 : ${ undefined > 0 }`);
console.log(`undefined > 0 : ${ undefined < 0 }`);
console.log(`undefined > 0 : ${ undefined == 0 }`);

// all false bcoz undefined turn into NaN




// --------------------------------------------------------------
// 1 Comparison operators return a boolean value.
// 2 Strings are compared letter-by-letter in the “dictionary” order.
// 3 When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// 4 The values null and undefined are equal == to themselves and each other, but do not equal any other value.
// 5 Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

// // QUESTIONS - find the output of the following 
// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"