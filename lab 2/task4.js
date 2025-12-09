function displayMessage(message, color) {
    document.write(`<p style="color:${color}; font-size:20px;">${message}</p>`);
}

let color = prompt("Choose a color for the message: red, green, or blue").toLowerCase();
if (!["red", "green", "blue"].includes(color)) {
    color = "black";
}

let name;
while (true) {
    name = prompt("Enter your name:");
    if (name && isNaN(name)) {
        break;
    } else {
        alert("Name must be characters only. Numbers are not allowed.");
    }
}

let phone;
while (true) {
    phone = prompt("Enter your phone number (8 digits):");
    if (/^\d{8}$/.test(phone)) {
        break;
    } else {
        alert("Phone number must be exactly 8 digits.");
    }
}

let mobile;
while (true) {
    mobile = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
    if (/^(010|011|012)\d{8}$/.test(mobile)) {
        break;
    } else {
        alert("Mobile must start with 010, 011, or 012 and contain 11 digits.");
    }
}

let email;
while (true) {
    email = prompt("Enter your email (e.g. abc@123.com):");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        break;
    } else {
        alert("Invalid email format. Try again.");
    }
}

let today = new Date();
let formattedDate = today.toDateString();

displayMessage(`Welcome, ${name}!`, color);
displayMessage(`Today's date is: ${formattedDate}`, color);
displayMessage(`Your Phone Number: ${phone}`, color);
displayMessage(`Your Mobile Number: ${mobile}`, color);
displayMessage(`Your Email: ${email}`, color);
