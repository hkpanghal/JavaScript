// stack memory => jo bhi primitive datattypes h unko stack memory provide ki jati h like (string ,number,bool...)

// heap memory => jo bhi user defined or refrence dattypes h unko heap memory provide ki jati h

// example => stack memory 

let name  = "john" ;
let anothername = name;
anothername = "ronit";
console.log(name);
console.log(anothername);

// o/p =>
// john
// ronit

// anothername contains the copy of the name if we do any change in anothername then the changes does not reflect in original name 

// example => heap memory

let username = {
    name:"john"
};

let anotherUsername= username;

anotherUsername.name = "ronit";

console.log(username.name);
console.log(anotherUsername.name);

// o/p =>
// ronit
// ronit

// anotherUsername contains the refrence of username if we make any changes in anotherUsername then the values also changes in username
