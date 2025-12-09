function executeExpression(exp) {
    try {
        let result = eval(exp); 
        alert("You entered: " + exp + "\nThe result is: " + result);
    } catch (err) {
        alert("Invalid expression!");
    }
}

let userExp = prompt("Enter a math expression:");
executeExpression(userExp);
