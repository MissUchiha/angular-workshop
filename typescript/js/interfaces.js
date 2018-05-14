"use strict";
;
let John = {
    name: "John Smith",
    yearOfBirth: 1988,
    email: "john@funnymail.com",
    smoker: false,
    pets: ["Jerry", "Chupy"],
    printAge: function () {
        console.log((new Date()).getFullYear() - this.yearOfBirth);
    }
};
function introduce(user) {
    console.log("Hi, I am " + user.name + " and I am " + user.printAge() + " old.");
}
introduce(John);
