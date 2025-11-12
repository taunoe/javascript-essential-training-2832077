// Add an event listener to each of the four forms.

// Each event listener should listen for a submit event on the form button belongs to.

// when button is clicked, the event listener should update the contents inside
// <span class="value"> for the relevant value.


const all_forms = document.querySelectorAll("form");


all_forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    // disable page reload
    event.preventDefault();

    // Get the attribute from the button that submitted the form
    const target_name = event.submitter.getAttribute("data-target");
    console.log(target_name);

    const input_el = document.getElementById(`${target_name}-input`);
    const target_container = document.getElementById(target_name);
    const target_el = target_container?.querySelector(".value");
    target_el.textContent = input_el.value;

    if (target_el && input_el) {
      target_el.textContent = input_el.value;
      // Optional: Clear the input after submitting
      input_el.value = ""; 
    }
  });
});
