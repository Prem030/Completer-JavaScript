// if condition
// const body = document.getElementById('body');
// console.log(body);
// let year = prompt("enter Your age");
// if(  +year > 18 ){
//     alert("You can apply for voter ID");
// }
// else{
//     alert(`currently you are minor you have to wait ${ 18 - year} years`)
// }

// let userChoice = prompt("Enter 1 to chage the bg color red \n enter 2 for bg color green \n enter 3 for bg color blue");
// if( userChoice == 1){
//     body.style.backgroundColor = "red";
// }
// else if( userChoice == 2){
//     body.style.backgroundColor = "green";
// }
// else{
//     body.style.backgroundColor = "blue";
// }

// ------------------------------------------------------------------

// CONDITIONAL OPERATOR ?

// let result = condition ? value1 : value 2;
// if condition -> true then value1 else value2;

let total = 34;
let result = ( total > 33 ) ? console.log("pass") : console.log("fail");

let number1 = Number(prompt("Enter 1st number "));
let number2 = Number(prompt("Enter 2nd number "));
let number3 = Number(prompt("Enter 3rd number "));

let largestNumber = number1 > number2 ? (number1 > number3 ?  number1 : number3 ) : ( number2 > number3 ?  number2 : number3);
alert(`The largest number is  : ${largestNumber}`)


let age = prompt('age?', 18);

let message = (age < 3) ? ('Hi, baby!') : ((age < 18) ? 'Hello!' : ((age < 100) ? 'Greetings!' : 'What an unusual age!'));
// bracket show how it will execute.
alert( message );


// -------------------------------------------------------------------------------------------------------------------------
// QUESTION -  re-write this into conditional operator  ? 
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

