class Person {
  #id; 
  name; 

  constructor(name, id) {
    this.name = name;
    this.#id = id;
  }

  getId() {
    return this.#id;
  }

  static role() {
    return "Person";
  }
}

class Employee extends Person {
  department;

  constructor(name, id, department) {
    super(name, id);
    this.department = department;
  }

  static role() {
    return "Employee";
  }
}

class Developer extends Employee {
  language;

  constructor(name, id, department, language) {
    super(name, id, department);
    this.language = language;
  }

  static role() {
    return "Developer";
  }
}

const dev = new Developer("Khushi", 101, "IT", "JavaScript");
console.log(dev.name);
console.log(dev.getId());
console.log(Developer.role());
