function checkDivisibility(x, y, z) {
    var divisibleByY = x % y === 0;
    var divisibleByZ = x % z === 0;
    var result = "";
    
    if (divisibleByY && divisibleByZ) {
        result = x + " is divisible by both " + y + " and " + z + ".";
    } else if (divisibleByY) {
        result = x + " is divisible by " + y + " only.";
    } else if (divisibleByZ) {
        result = x + " is divisible by " + z + " only.";
    } else {
        result = x + " is not divisible by " + y + " or " + z + ".";
    }
    
    return result;
}

function runTask5() {
    var x = parseFloat(prompt("Enter value for x:"));
    var y = parseFloat(prompt("Enter value for y:"));
    var z = parseFloat(prompt("Enter value for z:"));
    
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert("Please enter valid numbers!");
        return;
    }
    
    var result = checkDivisibility(x, y, z);
    document.getElementById("task5-result").innerHTML = "<p>" + result + "</p>";
    console.log(result);
}

