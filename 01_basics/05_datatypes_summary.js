// therw are mainly two types of datatypes in javascript
// 1 -> primitive   => (string ,number,boolean)
// 2 -> refrence(non - primitive) => (array,objects)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// primitive => these are the datatypes which shares a copy of the original data

// for example when assigned to another variable a copy of the original data is shared

let username = "hans kumar";
let anotherUsername = username;
anotherUsername = "saurav";

console.log(username);
console.log(anotherUsername);

// o/p =>
// hans kumar
// saurav


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// non - primitive or refrence or user defined datatypes 
//  these are the datatypes which shares a refrence of the original data when assigned or passed variable or function

// for example =>

let name = ["hans"];
let anotherName= name;
anotherName[0] = "saurav";
console.log(name[0]);
console.log(anotherName[0]);

// o/p=>
// saurav
// saurav

let student1 = {
    name:"hans",
    rollNo:123
}

let student2 = student1;
student2.name = "saurav";
console.log(student1.name);
console.log(student2.name);

// o/p =>
// saurav
// saurav
