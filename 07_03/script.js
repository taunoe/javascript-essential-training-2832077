/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

console.log(backpackContents.join(", "));  // komaga eraldatud list (string)

backpackContents.push("pliiats", "aabits", "redel"); // lisa massiivi lõppu

backpackContents.unshift("auto", "naine", "auto"); // lisa massiivi algusse

console.log(backpackContents);

backpackContents.pop(); // eemalda viimane

console.log(backpackContents);

// lisab listi
backpackContents.forEach(function (item) {
   item = `<li>${item}</li>`;
   console.log(item);
 });

// esimene vähemalt 5 täheline sõna
let longItems = backpackContents.find(function (item) {
   if (item.length >= 5) {
     return item;
   }
 });
 console.log("longItems:", longItems);


// set - stores unique values of any type

const itemsToPack = new Set(); // loomine

itemsToPack.add("water bottle"); // lisamine
itemsToPack.add("laptop");
itemsToPack.add("headphones");
itemsToPack.add("snacks");
itemsToPack.add("book");
itemsToPack.add("sunscreen");

console.log(itemsToPack.has("laptop")); // kas on?

itemsToPack.delete("laptop"); // eemaldamine

console.log(itemsToPack.size); // suurus

if (!itemsToPack.has("water bottle")) {
 itemsToPack.add("water bottle");
} else {
 console.log("Water bottle is already on the list!");
}


const backpack1 = ["water bottle", "laptop"];
const backpack2 = [ "headphones", "snacks", "book"];

itemsToPack.forEach(item => {
   if (backpack1.includes(item)) {
       console.log(`${item} is packed in backpack 1`);
   } else if (backpack2.includes(item)) {
       console.log(`${item} is packed in backpack 2`);
   } else {
       console.log(`${item} is not packed`);
   }
});


