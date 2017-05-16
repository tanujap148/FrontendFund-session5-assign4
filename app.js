/*employee is an array of objects containing details of 5 employees */
var employee = [
{name:"Ramesh", age:50, salary:"50000", address:{city: "Bangalore", state: "Karnataka", pincode: "560041"}},
{name:"Mahesh", age:40, salary:"45000", address:{city: "Bhopal", state: "Madhya-Pradesh", pincode: "462001"}},
{name:"Shekhar", age:30, salary:"40000", address:{city: "Mumbai", state: "Maharashtra", pincode: "226004"}},
{name:"Varun", age:27, salary:"35000", address:{city: "Lucknow", state: "Uttar-Pradesh", pincode: "400007"}},
{name:"Aditya", age:24, salary:"30000", address:{city: "Ranchi", state: "Jharkhand", pincode: "834002"}}
];
/*now displaying the details of the third employee */
document.getElementById("details").innerHTML= "Name: "+employee[2].name+"<br>Age: "+employee[2].age+"<br>Salary: "+employee[2].salary+"<br>Address: "+employee[2].address.city+", "+employee[2].address.state+", "+employee[2].address.pincode;