/**
 * Data types in JavaScript
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

// String:
let stringDemo = "A string of text.";
console.log("String:", stringDemo);
console.log("String:", typeof stringDemo);

// Numbes:
let integerDemo = 4;
console.log("Integer:", integerDemo);
console.log("Integer:", typeof integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:", floatDemo);
console.log("Floating point number:", typeof floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo);
console.log("Boolean value:", typeof booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo);
console.log("Null value:", typeof nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo);
console.log("Undefined:", typeof undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:", undefinedAssignedDemo);
console.log("Undefined assigned:", typeof undefinedAssignedDemo);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo);
console.log("Object:", typeof objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);
console.log("Array:", typeof arrayDemo);

// weakly typed language
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // Output: 15
console.log(add("5", 10)); // Output: "510"

////

function assertType(value, type) {
  if (typeof value !== type) {
    throw new TypeError(`Expected ${type}, but got ${typeof value}`);
  }
}

/////

function add_2(a, b) {
  assertType(a, "number");
  assertType(b, "number");
  return a + b;
}

console.log(add_2(5, 10)); // Output: 15
console.log(add_2("5", 10)); // Output: "510"

/////

function assert_type(value, type, paramName) {
  if (typeof value !== type) {
    throw new TypeError(`${paramName} must be a ${type}`);
  }
}

class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    assert_type(name, "string", "name");
    assert_type(volume, "number", "volume");
    assert_type(color, "string", "color");
    assert_type(pocketNum, "number", "pocketNum");
    assert_type(strapLengthL, "number", "strapLengthL");
    assert_type(strapLengthR, "number", "strapLengthR");
    assert_type(lidOpen, "boolean", "lidOpen");

    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  toggleLid(lidStatus) {
    assert_type(lidStatus, "boolean", "lidStatus");
    this.lidOpen = lidStatus;
  }

  newStrapLength(lengthLeft, lengthRight) {
    assert_type(lengthLeft, "number", "lengthLeft");
    assert_type(lengthRight, "number", "lengthRight");
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}
