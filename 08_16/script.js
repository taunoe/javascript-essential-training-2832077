/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
//import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";


const sisu = backpackObjectArray.map((seljakott) => {
  // Loo artikel
  let artikkel = document.createElement("article");
  // Lisa klass
  artikkel.classList.add("backpack");
  // Lisa ID
  artikkel.setAttribute("id", seljakott.id);

  artikkel.innerHTML = `
    <figure class="backpack__image">
      <img src=${seljakott.image} alt="" />
    </figure>
    <h1 class="backpack__name">${seljakott.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Maht:<span> ${
        seljakott.volume
      }l</span></li>
      <li class="packprop backpack__color">Värv:<span> ${
        seljakott.color
      }</span></li>
      <li class="backpack__age">Vanus:<span> ${seljakott.backpackAge()} päeva</span></li>
      <li class="packprop backpack__pockets">Taskuid:<span> ${
        seljakott.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Vasaku rihma pikkus:<span> ${
        seljakott.strapLength.left
      } cm</span></li>
      <li class="packprop backpack__strap">Parema rihma pikkus:<span> ${
        seljakott.strapLength.right
      } cm</span></li>
      <li class="feature backpack__lid">Kotisuu:<span> ${
        seljakott.lidOpen ? "avatud" : "suletud"
      }</span></li>
    </ul>
  `;
  return artikkel;
});


// Leia class=.maincontent
const main = document.querySelector(".maincontent");

// Lisa aktikklid
sisu.forEach((seljakott) => {
  main.append(seljakott);
});
