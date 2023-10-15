/*
javascript me teen type se variable declare kar sakte h

1 -> const : const ke dwara declare kia gya variable change nahi kia ja sakta
2 -> let 😂 : let ke dwara declare kia gya variable change kia ja sakta h
3 -> var 😊 : var ke dwara declare kia gya variable bhi change ho sakta h

Note😍 -> use let instead of var because of scope issue

without any specific keyword we can declare a variable in javascript but it is not recommended
*/

// defination and declaration
// 1 const variable_name = variable_value;
// 2 let variable_name = variable_value; 
// 3 var variable_name = variable_value;
// variable_name = variable_value ; 

// practice
 
const accountId = 1234;
let accountName = "HK";
var accountAddress = "hk@gmail.com";

accountCity = "Bengaluru"

// print the values

// first method
console.log(accountId);

// second method
console.table([accountId,accountName,accountAddress,accountCity]);


// try to change the variables value and see the results

/*
accountId = 5678;

here you will get an error like this 👀👀 but dont worry programmers are made to make mistakes and erros think about it
/workspaces/JavaScript/01_basics/variables.js:37
accountId = 5678;
          ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/workspaces/JavaScript/01_basics/variables.js:37:11)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
*/

accountName = "SK";
accountAddress = "sk@gmail.com";
accountCity = "Jaipur";

// print the values and see the magic 
console.table([accountId,accountName,accountAddress,accountCity]);

// the final result will look like this 😂😂😂

// @hkpanghal ➜ /workspaces/JavaScript (main) $ node 01_basics/variables.js
// 1234
// ┌─────────┬────────────────┐
// │ (index) │     Values     │
// ├─────────┼────────────────┤
// │    0    │      1234      │
// │    1    │      'HK'      │
// │    2    │ 'hk@gmail.com' │
// │    3    │  'Bengaluru'   │
// └─────────┴────────────────┘
// ┌─────────┬────────────────┐
// │ (index) │     Values     │
// ├─────────┼────────────────┤
// │    0    │      1234      │
// │    1    │      'SK'      │
// │    2    │ 'sk@gmail.com' │
// │    3    │    'Jaipur'    │
// └─────────┴────────────────┘

// you have succesfully learnt the variables in javascript

