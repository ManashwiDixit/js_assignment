//parent(base)

function person(name, age){
    this.name = name;
    this.age  = age;
}

person.prototype.introduce = function(){
    console.log(`hi, I'm ${this.name} and i'm ${this.age} years old.`);

};
//child of person

function Employee(name,age,company){
    person.call(this,name,age); //inherit properties
    this.company = company;

}

Employee.prototype = Object.create(person.prototype);//inherit method
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} works at ${this.company}.`);
};

// this is child of employee
function Developer(name,age,company,language){
    Employee.call(this,name,age,company); //inherit employee properties
    this.language = language;

}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function(){
    console.log(`${this.name} writes ${this.language} code.`);
};

const dev1 = new Developer("khushi", 22, "ToTheNew", "javascript");

dev1.introduce();
dev1.work();
dev1.code();