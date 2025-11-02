// JavaScript code​​​​​​‌‌‌​‌​​​​‌​‌​​‌‌​‌‌‌​‌‌​‌ below
// Write your answer here, then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.

import Camera from "./Camera.js";


// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const myCamera = new Camera("Hasselblad", "500C/M", 1963, "medium format", "Carl Zeiss 80mm f/2.8 Planar T", "120")

console.log(myCamera);
// Goal output:
// My camera is a [brand] [model] made in [year] making it [age] years old. It's a [format] camera with a [lens] lens using [filmtype] film.`


const result = myCamera.cameraHTML();

console.log(result);