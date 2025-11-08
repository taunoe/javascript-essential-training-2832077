/**
 * Loops Aplenty!
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

const asjad = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const nested_objects = {
  item01: {
    name: "piggy",
    type: "toy",
    weight: 30,
  },
  item02: {
    name: "headlamp",
    type: "equipment",
    weight: 120,
  },
  item03: {
    name: "pen",
    type: "tool",
    weight: 30,
  },
  item04: {
    name: "pencil",
    type: "tool",
    weight: 30,
  },
  item05: {
    name: "eraser",
    type: "tool",
    weight: 40,
  },
  item03: {
    name: "water bottle",
    type: "equipment",
    weight: 1300,
  },
};

const article = document.querySelector("article");
let asjad_list = document.createElement("ul");


/**
 * for loop
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */
/*
for (let i = 0; i < asjad.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = asjad[i];
  asjad_list.append(listItem);
}
*/

/**
 * for...of loop and arrays
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
// modern
for (const item of asjad) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  asjad_list.append(listItem);
}

/**
 * foreach array method
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
// modern
// for arrays
asjad.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  asjad_list.append(listItem);
});

/**
 * for...in loop and objects
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
// for objects
for (const single_object in nested_objects) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `Name: ${nested_objects[single_object].name}`;
  asjad_list.append(listItem);
}


article.append(asjad_list);
