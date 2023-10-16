/*
   
            Primitive Data Types: These are immutable and represent single values.

            Number: For numeric values.
            String: For textual data.
            Boolean: For true or false values.
            Undefined: Represents a declared variable with no value.
            Null: Represents an intentional absence of a value.
            Symbol (ES6): Used as unique object property keys.
            Reference Data Types: These are mutable and used to store complex data or collections.

            Object: Used for key-value pairs and complex data structures.
            Array: Represents ordered collections of values.
            Function: Functions are objects, used for executing code.
            Date: Used for working with dates and times.
            Custom Objects: You can create your own custom data types and objects.
            Understanding and using these data types is essential for working effectively with JavaScript, as they dictate how you handle and manipulate data in your code. 

*/

let name = "hans kumar";
let age = 19;
let goodboy = true;
let experience = null;
let knowledge ;

console.table([typeof name,typeof age,typeof goodboy,typeof experience,typeof knowledge]);

// the ouput of the above code will look like this
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │  'string'   │
// │    1    │  'number'   │
// │    2    │  'boolean'  │
// │    3    │  'object'   │
// │    4    │ 'undefined' │
// └─────────┴─────────────┘


