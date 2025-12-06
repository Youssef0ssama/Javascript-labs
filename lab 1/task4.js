function runTask4() {
    alert("Welcome to my site");
    
    var userName = prompt("Please enter your name:");
    
    if (userName !== null && userName.trim() !== "") {
        document.getElementById("task4-result").innerHTML = "<p>welcome " + userName + "</p>";
    } else {
        document.getElementById("task4-result").innerHTML = "<p>welcome Guest</p>";
    }
    
}

