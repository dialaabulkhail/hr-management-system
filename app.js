"use strict";

let allEmployees = [];
function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
  this.EmployeeID = idNum(ID);  
  this.FullName = FullName;
  this.Department = Department;
  this.Level = Level;
  this.Imagepath = ImageURL;
    allEmployees.push(this);
}

let ID = 1000;
function idNum(n) {
  let newID = n + 1;
  ID++;
  return newID;
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

Employee.prototype.findsal = function(){
    if (this.Level == "Senior") {
      this.salary = randomNum(1500,2000);
    } else if (this.Level == "Junior"){
      this.salary = randomNum(500,1000)
    } else if (this.Level == "Mid-Senior"){
      this.salary = randomNum(1000,1500)
    }
};


const Ghazi =new Employee("Ghazi Samer", "Administration", "Senior","images/Ghazi.jpg");
const Lana =new Employee("Lana Ali", "Finance", "Senior","images/Hadi.jpg");
const Tamara =new Employee("Tamara Ayoub", "Marketing", "Senior","./images/Tamara.jpg");
const Safi =new Employee("Safi Walid", "Administration", "Mid-Senior", "./images/Safi.jpg");
const Omar =new Employee("Omar Zaid", "Development", "Senior","./images/Omar.jpg");
const Rana =new Employee("Rana Saleh", "Development", "Junior","./images/Rana.jpg");
const Hadi =new Employee("Hadi Ahmad", "Finance", "Mid-Senior","./images/Hadi.jpg");

for(let x =0; x <allEmployees.length; x++){
  allEmployees[x].findsal();
}

let EmployeesContainer = document.getElementById("head");

function render () {

    for (let i = 0; i < allEmployees.length; i++) {
let employee = allEmployees[i];

   let employeeCard = document.createElement("div");
   employeeCard.setAttribute("id", "employeeCard");
   EmployeesContainer.appendChild(employeeCard);

   let image = document.createElement('img');
   image.setAttribute("src", allEmployees[i].Imagepath);
   employeeCard.appendChild(image).width = "200";

   let header = document.createElement("h3");
   header.textContent = `Name: ${employee.FullName} ID: ${employee.EmployeeID}`;
   employeeCard.appendChild(header);

   let info = document.createElement("h4");
   employeeCard.appendChild(info);
   info.textContent = `Department: ${employee.Department} Level: ${employee.Level}`;


   let employeeInfo = document.createElement("h4");
   employeeCard.appendChild(employeeInfo);
   employeeInfo.textContent = `Salary: ${employee.salary}`;
}}



let dataForm = document.getElementById("dataForm");
dataForm.addEventListener("submit", eventHandler);

function eventHandler(event){
    event.preventDefault();
    let FullName = event.target.name.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let ImageURL = event.target.ImageURL.value;

    let newdata = new Employee(FullName, Department, Level, ImageURL)
   newdata.findsal();
    render();
    settingItem();
}


const acc = document.getElementById("nav1");
acc.addEventListener("click", function(e) {
    alert("are you sure you want to leave page?");
});

function settingItem(){
    let data = JSON.stringify(allEmployees);
    localStorage.setItem("EmployeeInfo", data);
}

function gettingItem(){
    let stringObj = localStorage.getItem("EmployeeInfo");
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null){
    allEmployees = parsObj; 
  }
   render();
}
 gettingItem();
 