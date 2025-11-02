class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }
  // Method
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  // Method
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  // Method
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

class seljakott extends Backpack{
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired,
    brand,
    kaal
  ) {
    // Initialize the parent class properties
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen, dateAcquired);
    // New property specific to seljakott
    this.brand = brand;
    this.kaal = kaal;
  }
  // new method
  prindikaal() {
    console.log(`Kaal on ${this.kaal}`);
  }
  // override methods from the parent class 
}

export default Backpack;
