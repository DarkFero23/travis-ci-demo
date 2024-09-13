// main.test.js
const greet = require("./main");

test("Devuelve un mensaje de saludoS", () => {
  expect(greet("Mundo")).toBe("Hola, Mundo!");
});
