let str = prompt("Enter a string:");
let charToCount = prompt("Enter the character to count:");

let caseSensitive = confirm("Do you want to consider case sensitivity?\nOK = Yes, Cancel = No");

if (!caseSensitive) {
    str = str.toLowerCase();
    charToCount = charToCount.toLowerCase();
}

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === charToCount) {
        count++;
    }
}

alert(`The character "${charToCount}" appears ${count} times.`);
