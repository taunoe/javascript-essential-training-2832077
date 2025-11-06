# JavaScript Essential Training

The full course is available from [LinkedIn Learning][lil-course-url].

## Installing

1. To use these exercise files, you must have the following installed:
   - A code editor ([VS Code](https://code.visualstudio.com/) is recommended)
   - [Node.js](https://nodejs.org/en/)
   - [Prettier code formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - Live Server
2. From the root folder, open the terminal (bash) and enter the command

```bash
npm install
```

to install dependencies.

## Deprecated modules

- inflight@1.0.6 --> lru-cache
- rimraf@2.6.3
- glob@7.1.6
- debug@4.2.0
- eslint@7.11.0

```bash
npm audit
npm audit fix
```

JavaScript is a **weakly typed language**, meaning variables can hold values of any type without declaring what type of data they hold.

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // Output: 15
console.log(add("5", 10)); // Output: "510"

//////

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a + b;
}

///////

function assertType(value, type) {
  if (typeof value !== type) {
    throw new TypeError(`Expected ${type}, but got ${typeof value}`);
  }
}

function add(a, b) {
  assertType(a, "number");
  assertType(b, "number");
  return a + b;
}
```

**TypeScript** , a _strongly typed_ variant of JavaScript that adds static typing to solve this problem. TypeScript is then compiled into JavaScript before being run in the browser.

- If you need to access items by index, you should probably be using an **array**

- If you need to access items by key, you should probably be using an **Object**

- If you need to access items by value, you should probably be using a **Map**

- **Set** is specifically for when you need to store a collection of unique items and then perform operations on that collection.

QuerySelector [05_02](05_02/)

### Instructor

**Morten Rand-Hendriksen**

_Web Designer and Developer_

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/morten-rand-hendriksen?u=104).

[lil-course-url]: https://www.linkedin.com/learning/javascript-essential-training
[lil-thumbnail-url]: https://cdn.lynda.com/course/2832077/2832077-1610728160487-16x9.jpg
