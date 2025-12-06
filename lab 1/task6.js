function getUserInfo() {
    var name;
    var birthYear;
    var currentYear = new Date().getFullYear();

    while (true) {
        name = prompt("Enter your name:");
        
        if (name === null) {
            return;
        }

        if (name.trim() !== "" && isNaN(name)) {
            break;
        } else {
            alert("Please enter a valid name (must be a string)!");
        }
    }
    
    while (true) {
        birthYear = prompt("Enter your birth year:");
        
        if (birthYear === null) {
            return; 
        }
        
        if (isNaN(birthYear) || birthYear.trim() === "") {
            alert("Please enter a valid number!");
            continue;
        }
        
        birthYear = parseInt(birthYear);

        if (birthYear < 2010) {
            break;
        } else {
            alert("Birth year must be less than 2010!");
        }
    }

    var age = currentYear - birthYear;

    var output = "Name: " + name + "<br>" +
                "Birth year: " + birthYear + "<br>" +
                "Age: " + age;
    
    document.getElementById("task6-result").innerHTML = "<p>" + output + "</p>";
}

