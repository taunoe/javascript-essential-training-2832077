/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection[2]); // 5

collection[0] = "siga";
console.log(collection[0]); // siga

collection[collection.length] = "uus item";
console.log(collection[4]); // uus item

collection[10] = "randim";
console.log(collection[10]); // randim
console.log(collection);
console.log(collection[9]); // undefined
