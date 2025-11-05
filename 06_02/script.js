/**
 * The var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var number = 7;  // global scope
console.log(number);

function print_number() {
    let number = 2025;  // local scope
    console.log(number);
}

print_number();
console.log(number);

const kuu = 12;
console.log(kuu);
kuu = 13; // Error
console.log(kuu);
