"use strict";

let EmployeesContainer = document.getElementById("head");

function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Imagepath = ImageURL;
    Employee.allEmployees.push(this);
}

Employee.allEmployees = [];
const ghazi = new Employee("1000", "Ghazi Samer", "Administration", "Senior","images\Ghazi.jpg");
const lana = new Employee("1001", "Lana Ali", "Finance", "Senior","images\Hadi.jpg");
const tamara = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior","./images/Tamara.png" );
const safi = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./images/Safi.png");
const omar = new Employee("1004", "Omar Zaid", "Development", "Senior", "./images/Omar.png");
const rana = new Employee("1005", "Rana Saleh", "Development", "Junior", "./images/Rana.png");
const hadi = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./images/Hadi.png");


let dataForm = document.getElementById("dataForm");
dataForm.addEventListener("submit", eventHandler);

function eventHandler(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let departments = event.target.Departments.value;
    let level = event.target.level.value;
    let imageurl = event.target.imageurl.value;
    let newdata = new Employee(Math.random()*1000, name, departments, level, imageurl);
    console.log(Employee.allEmployees);
    newdata.render();
}

Employee.prototype.render = function () {
    let employeeCard = document.createElement("div");
    employeeCard.setAttribute("id", "employeeCard");
    EmployeesContainer.appendChild(employeeCard);
    let image = document.createElement('img');
    image.setAttribute("src", this.Imagepath);
    employeeCard.appendChild(image).width = "200";
    let header = document.createElement("h4");
    header.textContent = this.FullName;
    employeeCard.appendChild(header);
    let employeeInfo = document.createElement("h4");
    employeeCard.appendChild(employeeInfo);
    employeeInfo.textContent = "Department of: " + this.Department +  "- " + this.Level + " level"
}

for (let i = 0; i < Employee.allEmployees.length; i++) {
    Employee.allEmployees[i].render();
}

const acc = document.getElementById("nav1");
acc.addEventListener("click", function(e) {
    alert("are you sure you want to leave page?");
});

function settingItem(){
    let data = JSON.stringify(Employee.allEmployees);
    localStorage.setItem("head", data);
    
}
function gettingItem(){
    let stringObj = localStorage.getItem("head");
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null){
    Employee.allEmployees = parsObj; }
    render();
}
 gettingItem();





