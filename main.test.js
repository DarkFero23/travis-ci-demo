// main.test.js
const greet = require("./main");

test("greet returns a greeting message", () => {
  expect(greet("World")).toBe("Hello, World!");
});
