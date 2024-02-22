class Person{
   static #count=0;
   #fullName;
   #picturSrc

   constructor(fullName={firstName:"",lastName:""},gender,picturSrc="meal.png" ){
    this.fullName=`${fullName.firstName} ${fullName.lastName}`;
    this.picturSrc=picturSrc;
    this.gender=gender;
    this.count;

    if(this.constructor.name=="Person"){
        throw new Error("Can't creat opject from person clase")
    }

    if(!fullName||!fullName.firstName||!fullName.lastName){
        throw new Error("Both first name and last name requared")
    } 
   
    }
    get fullName(){
    return(this.#fullName)
    
   }
   
   set fullName(fullName){
       let pascal=this.#fullName
       pascal=fullName.split(" ")
       for (let i = 0; i <pascal .length; i++) {
        pascal[i] = pascal[i][0].toUpperCase() + pascal[i].substr(1);
    }

    this.#fullName= pascal.join(" ")
  
   }
   get picturSrc(){
    return( console.log(this.#picturSrc))
   }


   set picturSrc(picturSrc){
     this.#picturSrc=picturSrc;
   }

   get count(){
    return Person.#count
   }

  }


class Employee extends Person{
    constructor(fullName={firstName:"",lastName:""},gender,picturSrc,salary,languge){
        super(fullName,gender,picturSrc)
        this.salary=salary;
        this.languge=languge;
    }
    toString(){
        return (`Full Name is ${this.fullName} and salary =${this.salary}`)

    }
}
    



