function addition(x: number, y:number) : number {
  return x + y;
}

console.log(addition(2, 2));

let substraction: (x: number, y: number) => number;

substraction = (x: number, y:number) : number => { return x - y; };

console.log(substraction(2, 6));

function power(x: number, n: number = 2) : number {
    return Math.pow(x, n);
}

console.log(power(4));
console.log(power(2, 5));

function fullName(firstName: string, lastName?: string ) : void {
  if(lastName) {
    console.log(firstName + " " + lastName);
  }
  else {
    console.log(firstName);
  }
}

fullName("Ann", "Smith");
fullName("Robert");

function printAll(...items: number[]) : void {
  for(let i in items) {
    console.log(items[i]);
  }
}

printAll(1, 2, 3, 4);
