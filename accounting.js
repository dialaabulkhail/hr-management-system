"use strict";



let allEmployees= [];
function baseData(){
  let baseData = localStorage.getItem("EmployeeInfo");
  let parsObj = JSON.parse(baseData);
  if (parsObj !== null){
  allEmployees = parsObj; 
  }}
baseData();
 


  ///number of employees 
  let sumAD = 0;
  let sumMA = 0;
  let sumFI = 0;
  let sumDE = 0;
  for(let i=0;i<allEmployees.length;i++){
    if(allEmployees[i].Department === "Administration"){
       sumAD++
    } else if(allEmployees[i].Department === "Marketing"){
      sumMA++
    } else if(allEmployees[i].Department === "Finance"){
      sumFI++
    } else {
      sumDE++
    }
  }

   //total salary in each department
   let salaryAD=0;
   let salaryMA=0;
   let salaryFI=0;
   let salaryDE=0;
 for(let i=0;i<allEmployees.length;i++){
   if(allEmployees[i].Department === "Administration"){
     salaryAD =+ allEmployees[i].salary;
   } else if(allEmployees[i].Department === "Marketing"){
     salaryMA =+ allEmployees[i].salary;
   } else if(allEmployees[i].Department === "Finance"){
     salaryFI =+ allEmployees[i].salary;
   } else if(allEmployees[i].Department === "Development"){
     salaryDE =+ allEmployees[i].salary;
   }
 }
 
 //average salary in each department
 let avgAD = salaryAD/sumAD;
 let avgMA = salaryMA/sumMA;
 let avgFI = salaryFI/sumFI;
 let avgDE = salaryDE/sumDE; 


function render(){
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
}    
render();



 


