class Employee {
    public name: string;
    protected company: string;
    protected dateOfEmployment: Date;
    protected rank: number;

    public constructor(name: string, company: string, dateOfEmployment: Date, rank: number = 1) {
        this.name = name;
        this.company = company;
        this.dateOfEmployment = dateOfEmployment;
        this.rank = rank;
    }
    public getEmail() : string {
      return this.name + "@" + this.company + ".com";
    }
}

class Programmer extends Employee {
    private languages: string[];

    public constructor(name: string, company: string, dateOfEmployment: Date, rank: number = 1, languages: string[]) {
        super(name, company, dateOfEmployment, rank);
        this.languages = languages;
    }

    public isExpert(lang: string) : boolean {
      return (this.languages.indexOf(lang) !== -1);
    }
}

class Manager extends Employee {
    private employees: Employee[];

    public constructor(name: string, company: string, dateOfEmployment: Date, rank: number = 1, employees: Employee[]) {
        super(name, company, dateOfEmployment, rank);
        this.employees = employees;
    }

    public numberOfEmployees() : number {
      return this.employees.length;
    }
}

let Mary: Employee = new Employee("Mary", "Google", new Date());
let Rod: Programmer = new Programmer("Rod", "Google", new Date(), 2, ['Java', 'PHP']);
let Ive: Manager = new Manager("Ive", "Google", new Date(), 4, [Mary, Rod]);

console.log(Mary.getEmail());
console.log(Rod.isExpert("Javascript"));
console.log(Ive.numberOfEmployees());
