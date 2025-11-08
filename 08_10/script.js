/**
 * Using a callback function.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
  let formatted_value = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formatted_value;
};

// Callback receives finalTip object, creates and outputs table on the DOM.
const print_HTML = (final_tip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${final_tip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${final_tip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${final_tip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${final_tip.total}</td>
    </tr>
  `;
  document.querySelector("main").append(tipTable);
};

// Create a finalTip object with all the data. Send it to the printHTML callback.
const tip_calculator = (sum, percentage, locale, currency, callback) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const final_tip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };

  callback(final_tip);
};

tip_calculator(29.95, 18, "de-DE", "EUR", print_HTML); // callback
