// Difference between let , var , const 

// 1. SCOPE 
    // -> var is function-scoped: If declared inside a function, it is only available there. If declared inside an if block or loop, it leaks outside that block.
    // -> let and const are block-scoped: They are confined strictly to the nearest curly braces {} where they are defined (like an if statement or for loop)

function scopeComparison(){
    if (true) {
        var functionScoped = "I leaked out ! ";
        let blockScoped = "I'm trapped inside"
        
    }
    console.log(functionScoped);
    //console.log(blockScoped);//let_var_const.js:14 Uncaught ReferenceError: blockScoped is not defined at scopeComparison
    
}
scopeComparison()

// 2. Reassignment and Redeclaration
    // -> var allows anything: You can reassign values and redeclare the exact same variable name in the same scope without errors
    // -> let allows updates but no redeclaration: You can reassign its value later, but trying to declare it twice in the same scope throws an error
    // -> const is strictly fixed: It cannot be reassigned or redeclared. It must also be given a value immediately upon creation.
    
var name10 = "Goku";
var name12 = "vegeta"; // no error after re-declare variables  in var

let name11 = "user1";
// let name11 = "user2"; // will throw error due to redecalre 


// 3. Hoisting and the Temporal Dead Zone (TDZ)

    // -> var variables are hoisted and initialized: JavaScript moves the declaration to the top of its scope and assigns it a default value of undefined, allowing you to reference it before its actual line of code
    // -> let and const are hoisted but uninitialized: They exist in a "Temporal Dead Zone" from the start of the block until the execution reaches the declaration line. Accessing them early triggers a ReferenceError



    console.log( withVar ); //out put - undefined 
    console.log( withLet); //let_var_const.js:39 Uncaught ReferenceError: Cannot access 'withLet' before initialization
    
    

    var withVar = "I'm created with var";
    let withLet = "I'm created with let";

// with var undefined measn variable is created but can't show value 
// with let can access before initialization


