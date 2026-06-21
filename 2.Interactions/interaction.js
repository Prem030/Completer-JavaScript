alert("hello") // it show a message pop-up and wait for the use to press "OK"


// ----------------------------------------------------------
//  Prompt
// result = prompt( title , [default]);
// title - the text shown to the visitor/ user
// default - when user didn't enter any value then it will take default
let result = prompt("Please enter you name");
console.log(result);

let defaultResult = prompt('enter capital of India', "DELHI");
console.log(defaultResult);

let userAge = prompt("please enter your age : ");
console.log(`Enteterd age is ${ userAge }`);

// IE - internet explorer will insert 'undefined' if we didn't supply any value in prompt


//-----------------------------------------------------------

// CONFIRM 

let userChoice = confirm("Do you like chai");
alert(userChoice)

// ----------------------------------------------------------

// SUMMARY

// -> All these methods are modal : they pause script execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed.

// => There are two limitations shared byl all the methods 
//      1. The exact location of the model window is determined by the browser. 
//      2. The exact locatoin of the window also depend on the browswer, we can't modify it. 
