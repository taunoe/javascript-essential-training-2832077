/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const maja = {
  name: "Tsenter",
  color: "kollane",
  volume: 10,
};

// The arrow function
const koos_artikkel = (data) => {
  const new_article = document.createElement("article");
  new_article.innerHTML = `
    <h1>${data.name}</h1>
    <ul>
      <li>Volume: ${data.volume}</li>
      <li>Color: ${data.color}</li>
      <li>Volume: ${data.volume}</li>
    </ul>
  `;
  return new_article;
};

const main = document.querySelector("main");
main.append(koos_artikkel(maja));

// Function expression:
const add_css_class = function (element, name) {
  const el = document.querySelector(element);
  el.className = name;
};

add_css_class("ul", "kass");
