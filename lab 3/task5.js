let students = [
    { Name: "Ali", Degree: 95 },
    { Name: "Sara", Degree: 55 },
    { Name: "Omar", Degree: 72 },
    { Name: "Lina", Degree: 40 },
    { Name: "Hana", Degree: 88 }
];

// Find student Name, who got degree between 90 and 100 [Use find()].
let topStudent = students.find(function(stu){
    return stu.Degree >= 90 && stu.Degree <= 100;
});
console.log(topStudent);

// Print students names, who got a degree less than 60 [Use filter()].
let weakStudents = students.filter(function(stu){
    return stu.Degree < 60;
});
console.log(weakStudents);

// Add a new student to the array [Use push()],()], and then use for…in to print all elements of the array.
students.push({ Name: "Youssef", Degree: 77 });

for (let i in students) {
    console.log(students[i]);
}

// Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array.
students.pop();

for (let stu of students) {
    console.log(stu);
}

// Sort the array alphabetically based on the student name. 
students.sort(function(a, b){
    if (a.Name > b.Name) return 1;
    if (a.Name < b.Name) return -1;
    return 0;
});
console.log(students);

// Use splice() function to add 2 new students after the second element of the array [Bonus].
students.splice(2, 0,
    { Name: "Mona", Degree: 66 },
    { Name: "Khaled", Degree: 81 }
);
console.log(students);

// Use splice() function to remove 1 student after the third element in the array [Bonus].
students.splice(3, 1);
console.log(students);
