/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Hiire keskmine nupp
const cell01 = document.querySelector(".cell01");
cell01.addEventListener("auxclick", () => {
  cell01.classList.toggle("eriline");
});

// Hiire vasak nupp
const cell02 = document.querySelector(".cell02");
cell02.addEventListener("click", () => {
  cell02.classList.toggle("eriline");
});

// Hiire parem nupp
const cell03 = document.querySelector(".cell03");
cell03.addEventListener("contextmenu", () => {
  cell03.classList.toggle("eriline");
});

// Hiire topelt vasak nupp
const cell04 = document.querySelector(".cell04");
cell04.addEventListener("dblclick", () => {
  cell04.classList.toggle("eriline");
});

// Hiire nupp (erinevad) vajutus alla
const cell05 = document.querySelector(".cell05");
cell05.addEventListener("mousedown", () => {
  cell05.classList.toggle("eriline");
});

// Hiire siseneb elemendile
const cell06 = document.querySelector(".cell06");
cell06.addEventListener("mouseenter", () => {
  cell06.classList.toggle("eriline");
});

// Hiire  väljub elemendilt
const cell07 = document.querySelector(".cell07");
cell07.addEventListener("mouseleave", () => {
  cell07.classList.toggle("eriline");
});

// Hiire  liigub elemendil
const cell08 = document.querySelector(".cell08");
cell08.addEventListener("mousemove", () => {
  cell08.classList.toggle("eriline");
});

// Hiir väljub elemendilt
const cell09 = document.querySelector(".cell09");
cell09.addEventListener("mouseout", () => {
  cell09.classList.toggle("eriline");
});

// Hiir liigub elemendile
const cell10 = document.querySelector(".cell10");
cell10.addEventListener("mouseover", () => {
  cell10.classList.toggle("eriline");
});

// Hiir liigub elemendile
const cell11 = document.querySelector(".cell11");
cell11.addEventListener("mouseup", () => {
  cell11.classList.toggle("eriline");
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element#pointer_events

//
const cell12 = document.querySelector(".cell12");
cell12.addEventListener("gotpointercapture", () => {
  cell12.classList.toggle("eriline");
});

const cell13 = document.querySelector(".cell13");
cell13.addEventListener("lostpointercapture", () => {
  cell13.classList.toggle("eriline");
});

const cell14 = document.querySelector(".cell14");
cell14.addEventListener("pointercancel", () => {
  cell14.classList.toggle("eriline");
});

const cell15 = document.querySelector(".cell15");
cell15.addEventListener("pointerdown", () => {
  cell15.classList.toggle("eriline");
});

const cell16 = document.querySelector(".cell16");
cell16.addEventListener("pointerenter", () => {
  cell16.classList.toggle("eriline");
});

const cell17 = document.querySelector(".cell17");
cell17.addEventListener("pointerleave", () => {
  cell17.classList.toggle("eriline");
});

const cell18 = document.querySelector(".cell18");
cell18.addEventListener("pointermove", () => {
  cell18.classList.toggle("eriline");
});

const cell19 = document.querySelector(".cell19");
cell19.addEventListener("pointerout", () => {
  cell19.classList.toggle("eriline");
});

const cell20 = document.querySelector(".cell20");
cell20.addEventListener("pointerover", () => {
  cell20.classList.toggle("eriline");
});

const cell21 = document.querySelector(".cell21");
cell21.addEventListener("pointerrawupdate", () => {
  cell21.classList.toggle("eriline");
});

const cell22 = document.querySelector(".cell22");
cell22.addEventListener("pointerup", () => {
  cell22.classList.toggle("eriline");
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element#scroll_events

const cell23 = document.querySelector(".cell23");
cell23.addEventListener("scroll", () => {
  cell23.classList.toggle("eriline");
  console.log("scroll");
});

const cell24 = document.querySelector(".cell24");
cell24.addEventListener("scrollend", () => {
  cell24.classList.toggle("eriline");
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element#touch_events

const cell25 = document.querySelector(".cell25");
cell25.addEventListener("touchcancel", () => {
  cell25.classList.toggle("eriline");
});

const cell26 = document.querySelector(".cell26");
cell26.addEventListener("touchend", () => {
  cell26.classList.toggle("eriline");
});

const cell27 = document.querySelector(".cell27");
cell27.addEventListener("touchmove", () => {
  cell27.classList.toggle("eriline");
});

const cell28 = document.querySelector(".cell28");
cell28.addEventListener("touchstart", () => {
  cell28.classList.toggle("eriline");
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element#transition_events

const cell29 = document.querySelector(".cell29");
cell29.addEventListener("transitioncancel", () => {
  cell29.classList.toggle("eriline");
});

const cell30 = document.querySelector(".cell30");
cell30.addEventListener("transitionend", () => {
  cell30.classList.toggle("eriline");
});

const cell31 = document.querySelector(".cell31");
cell31.addEventListener("transitionrun", () => {
  cell31.classList.toggle("eriline");
});

const cell32 = document.querySelector(".cell32");
cell32.addEventListener("transitionstart", () => {
  cell32.classList.toggle("eriline");
});
