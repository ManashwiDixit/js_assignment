// question 1

function calculateSI(){
    var p = Number(prompt("enter principal amount"));
    var r = Number(prompt("enter interest rate"));
    var t = Number(prompt("enter number of years"));

    var si = (p*r*t)/100;
     document.getElementById("siResult").innerText = "simple Interest =" + si;


}

 // question 2
function checkPalindrome() {
    var str = document.getElementById("palInput").value.toLowerCase();
    var reversed = str.split("").reverse().join("");
    if (str === reversed)
        document.getElementById("palResult").innerText = "Palindrome ✅";
    else
        document.getElementById("palResult").innerText = "Not Palindrome ❌";
}

///  question 3
function areaCircle() {
    var r = Number(document.getElementById("radius").value);
    var area = Math.PI * r * r;
    document.getElementById("areaResult").innerText = "Area = " + area.toFixed(2);
}

 // question 4
function copyObject() {

    var obj1 = {
        name: "John",
        age: 4,
        isChild: true,
        car: 5
    };

    
    var obj2 = {};
    obj2.name = obj1.name;
    obj2.age = obj1.age;
    obj2.isChild = obj1.isChild;
    obj2.car = obj1.car;

    console.log("Original:", obj1);
    console.log("Copied:", obj2);

    document.getElementById("objResult").innerText =
        "Copied Object → Name: " + obj2.name +
        ", Age: " + obj2.age +
        ", IsChild: " + obj2.isChild +
        ", Car: " + obj2.car;
}


// question 5

function employeeTasks() {

    let employees = [
        { name: "A", age: 25, salary: 6000, DOB: "1999" },
        { name: "B", age: 30, salary: 800, DOB: "1994" },
        { name: "C", age: 22, salary: 3000, DOB: "2002" },
        { name: "D", age: 28, salary: 7000, DOB: "1996" }
    ];

    // 🔹 Salary > 5000
    let highSalary = employees.filter(e => e.salary > 5000);

    // 🔹 Group by age
    let groupByAge = {};
    employees.forEach(e => {
        if (!groupByAge[e.age]) groupByAge[e.age] = [];
        groupByAge[e.age].push(e);
    });

    // 🔹 Salary < 1000 & Age > 20 → increment
    let updated = employees.map(e => {
        if (e.salary < 1000 && e.age > 20) {
            e.salary = e.salary * 5;
        }
        return e;
    });

    // 🔹 Build readable output
    let output = "Salary > 5000:\n";
    highSalary.forEach(e => {
        output += `Name: ${e.name}, Age: ${e.age}, Salary: ${e.salary}, DOB: ${e.DOB}\n`;
    });

    output += "\nGrouped By Age:\n";
    for (let age in groupByAge) {
        output += `Age ${age}: `;
        output += groupByAge[age].map(e => e.name).join(", ");
        output += "\n";
    }

    output += "\nUpdated Employees:\n";
    updated.forEach(e => {
        output += `Name: ${e.name}, Age: ${e.age}, Salary: ${e.salary}, DOB: ${e.DOB}\n`;
    });

    document.getElementById("empResult").innerText = output;
}