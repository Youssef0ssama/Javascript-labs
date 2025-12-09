let r = prompt("Enter circle radius:");
r = Number(r); 

let area = Math.PI * Math.pow(r, 2);
alert("Circle Area = " + area);

let number = prompt("Enter a number to get its square root:");
number = Number(number);

let sqrtResult = Math.sqrt(number);
alert("The square root of " + number + " is: " + sqrtResult);

let angle = prompt("Enter an angle (in degrees) to get its cos value:");
angle = Number(angle);

let rad = angle * (Math.PI / 180);

let cosValue = Math.cos(rad);
alert("The cos of " + angle + " is: " + cosValue);
