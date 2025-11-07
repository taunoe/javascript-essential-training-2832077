/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "lightbulb",
  "USB drive",
];
console.log("Original array:", deskArray);

// Remove the last item
deskArray.pop();
console.log("pop:", deskArray);

// Remove the last item
let last_item = deskArray.pop();
console.log("last_item:", last_item);
deskArray.unshift(last_item);
console.log("unshift:", deskArray);

// Sort the items by alphabetical order
deskArray.sort();
console.log("sort:", deskArray);

// Use the find() method to find a specific item in the array
const found = deskArray.find((element) => element === "notebook");
console.log("found:", found);

// Remove the item you found using the find method from the array.
deskArray.splice(deskArray.indexOf(found), 1);
console.log("remove:", deskArray);

deskArray.push("koer", "kägu", "siga");
console.log("deskArray:", deskArray);

// sort
deskArray.sort();
console.log("sort:", deskArray);

// viimane item esimeseks
deskArray.unshift(deskArray.pop());
console.log("viimane esimeseks:", deskArray);

//leis USB Drive  ja vii viimasels
const siga_index = deskArray.indexOf("siga");
deskArray.push(deskArray.splice(siga_index, 1)); // eemalda 1 element
console.log("siga deskArray:", deskArray);

// leia laptop ja eemalda
const koer_index = deskArray.indexOf("koer");
const eemaldatud = deskArray.splice(koer_index, 2); // eemalda 2 elementi
console.log("eemaldatud:", eemaldatud);
console.log("koer deskArray:", deskArray);
