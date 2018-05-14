"use strict";
class Employee {
    constructor(name, company, dateOfEmployment, rank = 1) {
        this.name = name;
        this.company = company;
        this.dateOfEmployment = dateOfEmployment;
        this.rank = rank;
    }
    getEmail() {
        return this.name + "@" + this.company + ".com";
    }
}
class Programmer extends Employee {
    constructor(name, company, dateOfEmployment, rank = 1, languages) {
        super(name, company, dateOfEmployment, rank);
        this.languages = languages;
    }
    isExpert(lang) {
        return (this.languages.indexOf(lang) !== -1);
    }
}
class Manager extends Employee {
    constructor(name, company, dateOfEmployment, rank = 1, employees) {
        super(name, company, dateOfEmployment, rank);
        this.employees = employees;
    }
    numberOfEmployees() {
        return this.employees.length;
    }
}
let Mary = new Employee("Mary", "Google", new Date());
let Rod = new Programmer("Rod", "Google", new Date(), 2, ['Java', 'PHP']);
let Ive = new Manager("Ive", "Google", new Date(), 4, [Mary, Rod]);
console.log(Mary.getEmail());
console.log(Rod.isExpert("Javascript"));
console.log(Ive.numberOfEmployees());
