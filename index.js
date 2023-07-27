//Is Truthy:
//if true, write truthy
//if false, determine why it is false and record why
//test values: string, false, null, undefined, 0, empty string

let testValue = "I am a string";

if (testValue === "I am a string") {
    console.log(true);
} else if (testValue === false) {
    console.log("The boolean value false is falsy");
} else if (testValue === null) {
    console.log("The null value is falsy");
} else if (testValue === undefined) {
    console.log("undefined is falsy");
} else if (testValue === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (testValue === "") {
    console.log("The empty string is falsy (the only falsy string)");
}

//Number Line:
//takes the sum of two numbers
//is the number greater than or equal to 0?
//is it less than-1000, or greater than 100?
//test values: [50,51] [99,-2] [0, 101] [500,-500] [-1000,0] [-5,0]
let val1 = -1000;
let val2= 0;
let sum = val1 + val2;

if (val1 + val2 < -1000) {
    console.log(sum + " is less than -1000");
} else if (val1 + val2 < 0) {
    console.log(sum + " is a negative number");
} else if (val1 + val2 === 0) {
    console.log("0 is equal to 0");
}  else if (val1 + val2 > 100) {
    console.log(sum + " is greater than 100");
} else if (val1 + val2 > 0) {
    console.log(sum + " is larger than 0");
}

//Greater Than 5:
//are both numbers greater than or equal to 5?
//test cases: [5,6] [10,11] [0,0] [1000,-1000] [6,4] [5,5]

let num1 = 5;
let num2 = 5;

if (num1 >=5 && num2 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

//Pair and Compare
//compare two sets of data, if 1 or both sets are true, return true
//if neither set is true, return false
//test values: ["cat", "cat"] [6, "6"]: ["five", 5] ["dog", "dawg"]: [0, false] ["horse", "horse"]
//test values: ["eight","eight"] ["ate", "ate"] : [11, "eleven"] ["four", "for"] : ["cake", "cake"] ["pie", "pie"]

let param1A = "cake";
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";

if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}