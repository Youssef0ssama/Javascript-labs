let tips = [
    "JS is single-threaded.",
    "Use === instead of ==.",
    "Arrays in JS are dynamic.",
    "Objects store key/value pairs.",
    "NaN is not equal to itself.",
    "Math.random() gives 0 to 1.",
    "Use toFixed() to round numbers.",
    "Date months start from 0.",
    "Symbols are always unique.",
    "BigInt is for huge numbers."
];

let randomIndex = Math.floor(Math.random() * tips.length);

alert("Tip of the Day:\n" + tips[randomIndex]);
