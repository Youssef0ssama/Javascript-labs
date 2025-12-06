function checkTemperature(temperature) {
    var result = temperature >= 30 ? "HOT" : "Cold";
    return result;
}

function runTask2() {
    var temp = parseFloat(prompt("Enter today's temperature:"));
    if (!isNaN(temp)) {
        var result = checkTemperature(temp);
        document.getElementById("task2-result").innerHTML = "<p>Temperature: " + temp + "°C - " + result + "</p>";
    } else {
        alert("Please enter a valid number!");
    }
}

