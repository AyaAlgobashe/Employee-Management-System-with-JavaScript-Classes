let employee_1=new Employee({firstName:"aya",lastName:"ahmed"},"female","femal.jpg",3000,"English")
let employee_2=new Employee({firstName:"asmaa",lastName:"gobashe"},"female","asma.jpg",4000,"English")
let employee_3=new Employee({firstName:"alla",lastName:"mohamed"},"female","femal.jpg",5500,"English")
// let person=new Person()
 console.log(employee_1)
 console.log(employee_2)
 console.log(employee_3)


 //////////////////////////create carde 

let employeCard=function(employee){
let parentDiv= document.createElement("div");
document.body.appendChild(parentDiv);
parentDiv.classList.add("parentDiv")
let profileImage=document.createElement("img")
profileImage.src=employee.picturSrc;
profileImage.src="femal.jpg";

profileImage.classList.add("styleImage")
parentDiv.appendChild(profileImage);

let fullName=document.createElement("p")
fullName.classList.add("fullName")
fullName.innerText=`${employee.fullName}`
parentDiv.appendChild(fullName)

let gender=document.createElement("p")
gender.classList.add("list")
gender.innerText=`${employee.gender}`
parentDiv.appendChild(gender)

let salary=document.createElement("p")
salary.classList.add("list")
salary.innerText=`${employee.salary}`
parentDiv.appendChild(salary)

let languge=document.createElement("p")
languge.classList.add("list")
languge.innerText=`${employee.languge}`
parentDiv.appendChild(languge)



}

employeCard(employee_1);
employeCard(employee_2);
employeCard(employee_3);
