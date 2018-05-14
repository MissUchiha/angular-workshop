interface IUser {
  name: string,
  yearOfBirth: number,
  email: string,
  smoker?: boolean,
  pets: string[],
  printAge: () => void
};

let John: IUser = {
  name: "John Smith",
  yearOfBirth: 1988,
  email: "john@funnymail.com",
  smoker: false,
  pets: ["Jerry", "Chupy"],
  printAge: function()  {
    console.log((new Date()).getFullYear() - this.yearOfBirth);
  }
}

function introduce(user: IUser) : void {
  console.log("Hi, I am " + user.name + " and I am " + user.printAge() + " old." );
}

introduce(John);
