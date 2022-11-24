const divide = require("./divide");
const test = require("node:test");
const assert = require("node:assert");
var almostEqual = require("almost-equal");

test("4 divided by 2 is 2", () => {
  assert.equal(divide(4, 2), 2);
});

test("1 divided by 3 is 0.3", () => {
  almostEqual(divide(1, 3), 0.3333, 4);
});

test("1 divided by 0 is infinity", () => {
  assert.equal(divide(1, 0), Infinity);
});

test("not numbers in division", () => {
  assert.throws(() => {
    divide("a", 3);
  });
});

test("missing argument", () => {
  assert.throws(() => {
    divide(3);
  });
});