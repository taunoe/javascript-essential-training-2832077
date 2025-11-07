/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const formatter = (locale, currency, value) => {
  let formatted_value = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(value);

  return formatted_value
};

const tip_calculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${formatter(locale, currency, sum)}
  Tip percentage: ${percentage} %
  Tip:            ${formatter(locale, currency, tip.toFixed(2))}
  Total:          ${formatter(locale, currency, total.toFixed(2))}
`);
};

tip_calculator(100, 22, "et-EE", "EUR");
