/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);

// Global objects
const aeg = new Date();
console.log(aeg);
console.log(aeg.toDateString()); // Sat Nov 01 2025
console.log(aeg.toTimeString()); // 09:38:52 GMT+0200 (Ida-Euroopa standardaeg) script.js:26:9

