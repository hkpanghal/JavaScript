
let score = 10;

let inputScore1 = Number(score);
let inputScore2 = String(score);
let inputScore3 = Boolean(score);


console.table([score,inputScore1,inputScore2,inputScore3]);
console.table([typeof score, typeof inputScore1,typeof inputScore2,typeof inputScore3]);

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   10   │
// │    1    │   10   │
// │    2    │  '10'  │
// │    3    │  true  │
// └─────────┴────────┘
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │ 'number'  │
// │    1    │ 'number'  │
// │    2    │ 'string'  │
// │    3    │ 'boolean' │
// └─────────┴───────────┘

let username = "hk@123";

let inputUsername1 = Number(username);
let inputUsername2 = String(username);
let inputUsername3 = Boolean(username);


console.table([username,inputUsername1,inputUsername2,inputUsername3]);
console.table([typeof score, typeof inputUsername1,typeof inputUsername2,typeof inputUsername3]);

// ┌─────────┬──────────┐
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │ 'hk@123' │
// │    1    │   NaN    │
// │    2    │ 'hk@123' │
// │    3    │   true   │
// └─────────┴──────────┘
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │ 'number'  │
// │    1    │ 'number'  │
// │    2    │ 'string'  │
// │    3    │ 'boolean' │
// └─────────┴───────────┘

let isLoggedIn = true

let isLoggedIn1 = Number(isLoggedIn);
let isLoggedIn2 = String(isLoggedIn);
let isLoggedIn3 = Boolean(isLoggedIn);

console.table([isLoggedIn,isLoggedIn1,isLoggedIn2,isLoggedIn3]);
console.table([typeof isLoggedIn, typeof isLoggedIn1,typeof isLoggedIn2,typeof isLoggedIn3]);

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │  true  │
// │    1    │   1    │
// │    2    │ 'true' │
// │    3    │  true  │
// └─────────┴────────┘
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │ 'boolean' │
// │    1    │ 'number'  │
// │    2    │ 'string'  │
// │    3    │ 'boolean' │
// └─────────┴───────────┘


let experience = null

let experience1 = Number(experience);
let experience2 = String(experience);
let experience3 = Boolean(experience);

console.table([experience,experience1,experience2,experience3]);
console.table([typeof experience, typeof experience1,typeof experience2,typeof experience3]);

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │  null  │
// │    1    │   0    │
// │    2    │ 'null' │
// │    3    │ false  │
// └─────────┴────────┘
// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │ 'object'  │
// │    1    │ 'number'  │
// │    2    │ 'string'  │
// │    3    │ 'boolean' │
// └─────────┴───────────┘


let knowledge ;

let knowledge1 = Number(knowledge);
let knowledge2 = String(knowledge);
let knowledge3 = Boolean(knowledge);

console.table([knowledge,knowledge1,knowledge2,knowledge3]);
console.table([typeof knowledge, typeof knowledge1,typeof knowledge2,typeof knowledge3]);


// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │  undefined  │
// │    1    │     NaN     │
// │    2    │ 'undefined' │
// │    3    │    false    │
// └─────────┴─────────────┘
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │ 'undefined' │
// │    1    │  'number'   │
// │    2    │  'string'   │
// │    3    │  'boolean'  │
// └─────────┴─────────────┘
