"use strict";

//random number 
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let juniorRan = randomNum(500, 1000);
let midSeniorRan = randomNum(1000, 1500);
let seniorRan = randomNum(1500, 2000);

let tax = randomNum() * 0.075;
let netSalary = randomNum - tax;

randomNum();


//employees array
let EmployeesArray = [
{ID: "1000"  ,fullName:"Ghazi Samer", department:"Administration" ,level: "senior" ,salary: seniorRan },
{ID: "1001"  ,fullName:"Lana Ali", department:"Finance" ,level: "senior" ,salary: seniorRan },
{ID: "1002"  ,fullName:"Tamara Ayoub", department:"Marketing" ,level: "senior" ,salary: seniorRan },
{ID: "1003" ,fullName:"Safi Walid", department:"Administration" ,level: "Mid-senior" ,salary: midSeniorRan },
{ID: "1004"  ,fullName:"Omar Zaid", department:"Development" ,level: "senior" ,salary: seniorRan },
{ID: "1005"  ,fullName:"Rana Saleh", department:"Development" ,level: "junior" ,salary: juniorRan },
{ID: "1006"  ,fullName:"Hadi Ahmad", department:"Finance" ,level: "Mid-senior" ,salary: midSeniorRan },
]


//random salary
const newArr = EmployeesArray.map(sal => {
  if (sal.level == "senior") {
    return {...sal, salary: seniorRan};
  } else if (sal.level == "junior"){
    return {...sal, salary: juniorRan};
  } else{
    return{...sal, salary: midSeniorRan};
  }

  return sal;
});
console.log(newArr);


///number of employees 
  let sumAD = 0;
  let sumMA = 0;
  let sumFI = 0;
  let sumDE = 0;
  for(let i=0;i<EmployeesArray.length;i++){
    if(EmployeesArray[i].department === "Administration"){
       sumAD++
    } else if(EmployeesArray[i].department === "Marketing"){
      sumMA++
    } else if(EmployeesArray[i].department === "Finance"){
      sumFI++
    } else {
      sumDE++
    }
  }

  //summation of salary in each department
  let salaryAD=0;
  let salaryMA=0;
  let salaryFI=0;
  let salaryDE=0;
for(let i=0;i<EmployeesArray.length;i++){
  if(EmployeesArray[i].department === "Administration"){
    salaryAD =+ EmployeesArray[i].salary;
  } else if(EmployeesArray[i].department === "Marketing"){
    salaryMA =+ EmployeesArray[i].salary;
  } else if(EmployeesArray[i].department === "Finance"){
    salaryFI =+ EmployeesArray[i].salary;
  } else {
    salaryDE =+ EmployeesArray[i].salary;
  }
}

//average salary in each department
let avgAD = salaryAD/sumAD;
let avgMA = salaryMA/sumMA;
let avgFI = salaryFI/sumFI;
let avgDE = salaryDE/sumDE;


//table of employees
let myTable = document.getElementById("employeeTable");
let employeeTable = document.createElement("table");
myTable.appendChild(employeeTable);

let trEl = document.createElement("tr");
employeeTable.appendChild(trEl);

let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent= "Department";
  
  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent= "# of employees";

  let thEl2 = document.createElement('th');
  trEl.appendChild(thEl2);
  thEl2.textContent= "Total salary";

  let thEl3 = document.createElement('th');
  trEl.appendChild(thEl3);
  thEl3.textContent= "Avarege";

 
  let trEl1 = document.createElement("tr");
employeeTable.appendChild(trEl1);

let thEl4 = document.createElement('th');
  trEl1.appendChild(thEl4);
  thEl4.textContent= "Administration";

  let thElad = document.createElement('th');
  trEl1.appendChild(thElad);
      thElad.textContent= sumAD;
    
      
  let thEladsal = document.createElement('th');
  trEl1.appendChild(thEladsal);
      thEladsal.textContent= salaryAD;

      let thEladavg = document.createElement('th');
  trEl1.appendChild(thEladavg);
      thEladavg.textContent= avgAD;
  
  let trEl2 = document.createElement("tr");
employeeTable.appendChild(trEl2);

let thEl5 = document.createElement('th');
  trEl2.appendChild(thEl5);
  thEl5.textContent= "Marketing";

  let thElma = document.createElement('th');
  trEl2.appendChild(thElma);
  thElma.textContent= sumMA;

  let thElmasal = document.createElement('th');
  trEl2.appendChild(thElmasal);
  thElmasal.textContent= salaryMA;

  let thElmaavg = document.createElement('th');
  trEl2.appendChild(thElmaavg);
  thElmaavg.textContent= avgMA;

let trEl3 = document.createElement("tr");
employeeTable.appendChild(trEl3);

let thEl6 = document.createElement('th');
  trEl3.appendChild(thEl6);
  thEl6.textContent= "Development";

  let thEldev = document.createElement('th');
  trEl3.appendChild(thEldev);
  thEldev.textContent= sumDE;

  let thEldevsal = document.createElement('th');
  trEl3.appendChild(thEldevsal);
  thEldevsal.textContent= salaryDE;

  let thEldevavg = document.createElement('th');
  trEl3.appendChild(thEldevavg);
  thEldevavg.textContent= avgDE;

  let trEl4 = document.createElement("tr");
employeeTable.appendChild(trEl4);

let thEl7 = document.createElement('th');
  trEl4.appendChild(thEl7);
  thEl7.textContent= "Finance";

  let thElfin = document.createElement('th');
  trEl4.appendChild(thElfin);
  thElfin.textContent= sumFI;

  let thElfinsal = document.createElement('th');
  trEl4.appendChild(thElfinsal);
  thElfinsal.textContent= salaryFI;

  let thElfinavg = document.createElement('th');
  trEl4.appendChild(thElfinavg);
  thElfinavg.textContent= avgFI;


  //Table footer
  let trElfooter = document.createElement("tr");
  trElfooter.setAttribute("id", "trElfooter");
employeeTable.appendChild(trElfooter);

let thfooter1 = document.createElement("th");
trElfooter.appendChild(thfooter1);
thfooter1.textContent = "Total"

let thfooter2 = document.createElement('th');
  trElfooter.appendChild(thfooter2);
  thfooter2.textContent= sumAD + sumDE + sumFI + sumMA;
  
  let thfooter3 = document.createElement('th');
  trElfooter.appendChild(thfooter3);
  thfooter3.textContent= salaryFI + salaryMA + salaryDE + salaryAD;
  
  let thfooter4 = document.createElement('th');
  trElfooter.appendChild(thfooter4);
  thfooter4.textContent= avgFI + avgDE +avgAD + avgMA;
  