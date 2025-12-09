let userString = prompt("Enter a string to check if it is a palindrome:");
let considerCase = confirm("Consider case sensitivity?\nOK = Yes, Cancel = No");

let str2 = userString;

if (!considerCase) {
    str2 = str2.toLowerCase();
}

str2 = str2.replace(/\s+/g, "");

let reversed = str2.split("").reverse().join("");

if (str2 === reversed) {
    alert(`"${userString}" is a palindrome`);
} else {
    alert(`"${userString}" is NOT a palindrome`);
}
