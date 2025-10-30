/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);

/**
 * Pliiats
 */

const pliiats = {
  brand: "Nero",
  color: "black",
  lenght: 20,
  is_eraser: true,
  is_sharpened: false,
  new_lenght: function (lenght) {
    this.lenght = lenght;
  },
};

console.log("Objekt Pliiats:", pliiats);
pliiats.new_lenght(15);
console.log("Pliiatsi pikkus:", pliiats.lenght);

const pinal = {
  punane_pliiats: pliiats,
};

pinal.punane_pliiats.brand = "Wolfe";
pinal.punane_pliiats.color = "Red";

console.log("Objekt pinal:", pinal);

// Prototype Inheritence
console.log(pliiats.lenght.valueOf());
console.log(pliiats.lenght.toString());

const joonlaud = {
  pikkus: 40,
  toString: function () {
    //return "Joonlaud on pikkusega ${this.pikkus}"; // ?????
    return `Joonlaud: ${this.pikkus} mm pikk`;
  },
};

console.log(joonlaud.toString());
console.log("viimane");
