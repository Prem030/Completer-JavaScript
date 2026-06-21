// MATHS ( addition +  subraction - , multiplication * , Division / , Remainder % , Exponentiation **) 

console.log(10 + 20);
console.log(10n + 12n);
console.log(10n - 21n);
console.log(1000935n % 10n); // % - return remain after divion 
console.log(10 % 3);
console.log(`1234 % Number('a') : ${1234 % Number("a")}`);
// solution
console.log(`1234 % "a".charCodeAt(0) : ${1234 % "a".charCodeAt(0)}`);
console.log("1234562" % 3);

// Exponent ** -  a**b => a^b;

console.log(4**2); // 4 * 4
console.log(2**10); // 2*2*2*2*2*2*2*2*2*2
console.log(`2**-4 : ${2**-4}`); //(2*2*2*2)^-4
console.log(`3**0.9 : ${3**0.9}`); 
console.log(`4**(1/3) : ${4**(1/3)}`)

// String connatenation with binary  + 

// binary + is applied to strings it merges them 
let firstName = "Narendra";
let middleName = " Damodardas";
let lastName = " Modi";
console.log(`The Full name of India's Prime minister : ${firstName + middleName + lastName}`);

// Note :- if any of the operands is a string , then the other one is converted to a string too.

console.log(`'1' + 2 : ${'1' + 2} and typeof: ${typeof('1' + 2)}`);
console.log(`2 + '1' : ${2 + '1'} and typeof : ${typeof(2 + '1')}`);

console.log(`2 + 2 + '1' : ${2 + 2 + '1'}`); // 41 not 221
console.log(`'1' + 2 + 2 : ${'1' + 2 + 2}`); // 122 not 14
console.log(`1 + 2 + 2 + 3 + '4' + 5  : ${1 + 2 + 2 + 3 + '4' + 5 }`); 
console.log(`1 + 2 + 2 + 3 + '4' * 5  : ${1 + 2 + 2 + 3 + '4' * 5 }`); 
console.log(`1 + 2 + 2 + 3 * '4' + 5  : ${1 + 2 + 2 + 3 * '4' + 5 }`);  // 5 + ( 4 * 3 ) + 5 


// ----------------------------------------------------------

// NUMERIC CONVERSION

// if operand is not a number then unary(+) will convert operand into number
// It does the same thing as Number(...) but is shorter
let notNumberValue = true;
let emptyValue = null;
let undefinedValue;
console.log(`+notNumberValue : ${+notNumberValue}`);
console.log(`+emptyValue : ${+emptyValue}`);
console.log(`+undefinedValue : ${+undefinedValue}`);
console.log(`+"" : ${+""}`); 

// many of the time we get numbers as a string we need to convert them
let numberOfOranges = '23';
let numberOfApples = '24';
let result1 = numberOfApples + numberOfOranges;
let result2 = +numberOfApples + +numberOfOranges
console.log(`the total number of apples and oranges ( numberOfApples("24") + numberOfOranges("23") ) : ${result1}`);
console.log(`the total number of apples and oranges ( +numberOfApples("24") + +numberOfOranges("23") ) : ${result2}`);

// ---------------------------------------------------------

// OPERATOR PRECEDENCE -----------

// if an expression has more than one operator , the execution is defined by their precedence or in othe words the default priority order of operators.

// Precedence     OperatorType                           Individual                                                OperatorsAssociativity
// 18              Grouping                                ( … )                                                           n/a 
// 17              Member Access & Calls          . , ?. , [ … ] , foo( … ) , new Foo( … )                             Left-to-Right
// 16              Instantiation(no args)                  new Foo                                                         n/a
// 15              Postfix Updates                        ++ , -- (evaluated after variable)                               n/a
// 14              Unary Operators                 ++ , -- (prefix) , ! , ~ , + , - , typeof , void , delete , await   Right-to-Left
// 13              Exponentiation                          **                                                          Right-to-Left
// 12              Multiplicative                          * , / , %                                                   Left-to-Right
// 11              Additive                                + , -                                                       Left-to-Right
// 10              Bitwise Shifts                          << , >> , >>>                                               Left-to-Right
// 9               Relational                              < , <= , > , >= , in , instanceof                           Left-to-Right
// 8               Equality                                == , != , === , !==                                         Left-to-Right
// 7               Bitwise AND                             &                                                           Left-to-Right
// 6               Bitwise XOR                             ^                                                           Left-to-Right
// 5               Bitwise OR                              `                                                           `
// 4               Logical AND                             &&                                                          Left-to-Right
// 3               Logical OR / Nullish                    || , ??                                                     Left-to-Right
// 2               Assignment & Ternary                    = , += , -= , *= , /= , ? : , => , yield                    Right-to-Left
// 1               Comma                                   ,                                                           Left-to-Right



//-----------------------------------------------------------
// Chaining assignments

let a = b = c = 3 + 4 * 4;
console.log( a , b , c );


// Modify in place
let sum = 20;
sum += 13;
console.log(`sum : ${sum}`);

// Increment ++ / Decrement --
