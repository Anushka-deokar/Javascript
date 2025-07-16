//function with default parameters

function greet(name = "Anushka") {
    return `Welcome ${name}`;
}
console.log(greet());


//function with multiple parameters

const multiply = (a, b, c) => a * b * c;
console.log(multiply(3, 2, 2));


//Function returning another function 


function outer() {
    return function inner() {
        return " Hello from inner !";
    };
}

const result = outer();
console.log(result());   // Hello from inner !