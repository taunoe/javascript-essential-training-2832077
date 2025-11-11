/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function () {
  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === this.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  this.innerText == "Ava"
    ? (this.innerText = "Sule")
    : (this.innerText = "Ava");

  // Set visible property status text
  let status = this.parentElement.querySelector(".backpack__lid span");
  status.innerText == "suletud"
    ? (status.innerText = "avatud")
    : (status.innerText = "suletud");
};

/**
 * - Loop through backpackObjectArray
 * - create article for each entry
 * - add articles back to backpackList array
 */
const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "avatud" : "suletud"
      }</span></li>
    </ul>
    <button class="lid-toggle">Ava</button>
  `;

  const button = backpackArticle.querySelector(".lid-toggle");
  const status = backpackArticle.querySelector(".backpack__lid span");

  // event listener
  // arrow function
  /*
  button.addEventListener("click", (event) => {
    console.log(event);
    button.innerText === "Sule"
      ? (button.innerText = "Ava")
      : (button.innerText = "Sule");
    status.innerText === "avatud"
      ? (status.innerText = "suletud")
      : (status.innerText = "avatud");
  });
  */
  // or
  // event listener
  // function declaration
  /*
  button.addEventListener("click", function (event) {
    console.log(event);
    this.innerText === "Sule"
      ? (this.innerText = "Ava")
      : (this.innerText = "Sule");
    status.innerText === "avatud"
      ? (status.innerText = "suletud")
      : (status.innerText = "avatud");
  });
  */
  // or
  // callback function
  button.addEventListener("click", lidToggle);

  return backpackArticle;
});

const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
