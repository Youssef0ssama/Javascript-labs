function writeWelcome() {
    var output = "";
    for (let i = 1; i <= 6; i++) {
        output += "<h" + i + ">welcome to my page</h" + i + ">";
    }

    var resultElement = document.getElementById("task1-result");
    if (resultElement) {
        resultElement.innerHTML = output;
    } else {
        for (let i = 1; i <= 6; i++) {
            document.write("<h" + i + ">welcome to my page</h" + i + ">");
        }
    }
}

