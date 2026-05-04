//Capture following inputs
let employeeName = document.getElementById("name").value;
let employeeSurname = document.getElementById("surname").value;
let dailyRate = Number(document.getElementById("dailyRate").value);
let daysWorked = Number(document.getElementById("daysWorked").value);

//Calculate Salary
let salary = dailyRate * daysWorked;
let tax = 0;

let employeeDetails = [+employeeName, +employeeSurname, +salary, +tax, +netSalary];

function calculate(){
//Apply Tax Based on Salary
if(salary >= 20000){
    tax = salary * 0.10;
}
else if(salary >= 10000 && salary < 20000){
    tax = salary * 0.05;
}
else if(salary < 10000){
    tax = 0;
}

//Display Results
let netSalary = salary - tax;
alert("employee: " + employeeName + " " + employeeSurname +
    "\nSalary: R" + salary + 
    "\nTax: R" + tax + 
    "\nSalary after tax: R" + netSalary);
}