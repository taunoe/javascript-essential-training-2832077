// Import the Backpack class so we can make new Backpack objects.
import Backpack from "./Backpack.js";

// Create new Backpack object
const everydayPack = new Backpack(
  "pack01",
  "Igav seljakott",
  30,
  "hall",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

// Create new Backpack object
const frogPack = new Backpack(
  "pack02",
  "Konna seljakott",
  20,
  "roheline",
  3,
  10,
  10,
  false,
  "November 1, 2025 15:00:00 PST",
  "../assets/images/frog.svg"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

// Export the array to be used in other files
export default backpackObjectArray;
