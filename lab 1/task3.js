function calculateSum() {
    var sum = 0;
    var value;
    
    while (true) {
        value = prompt("Enter a numerical value (enter 0 to stop):");

        if (value === null) {
            break;
        }
        
        if (isNaN(value) || value.trim() === "") {
            alert("Please enter a valid number!");
            continue;
        }
        
        value = parseFloat(value);
        
        if (value === 0) {
            break;
        }

        sum += value;

        if (sum > 100) {
            console.log("Sum exceeded 100. Stopping...");
            break;
        }
    }
    
    console.log("Total sum: " + sum);
    document.getElementById("task3-result").innerHTML = "<p>Total sum: " + sum + "</p>";
}

