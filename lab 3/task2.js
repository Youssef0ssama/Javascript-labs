function printOdd(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

let start = parseInt(prompt("Enter the start number:"));
let end = parseInt(prompt("Enter the end number:"));
printOdd(start, end);