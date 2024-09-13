// main.test.js
const greet = require("./main");

test("Devuelve un mensaje de saludo", () => {
  expect(greet("Mundo")).toBe("Hola, Mundo!");
});
