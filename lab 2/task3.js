function largestWord(str) {
    let words = str.split(" ");
    
    let maxWord = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > maxWord.length) {
            maxWord = words[i];
        }
    }

    return maxWord;
}

let userInput = prompt("Enter a sentence:");
alert("The largest word is: " + largestWord(userInput));
