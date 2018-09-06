const assert = require("assert");
const { intToRoman, romanToInt } = require("../index");



describe("intToRoman()", function () {
  it("Deve retornar false", () => {
    assert.equal(intToRoman(0), false);
  });
  it("Deve retornar I", () => {
    assert.equal(intToRoman(1), "I");
  });

  it("Deve retornar XXII", () => {
    assert.equal(intToRoman(22), "XXII");
  });
  it("Deve retornar M", () => {
    assert.equal(intToRoman(1000), "M");
  });
  it("Deve retornar MMMCMXCIX", () => {
    assert.equal(intToRoman(3999), "MMMCMXCIX");
  });
  it("Deve retornar XXII", () => {
    assert.equal(intToRoman(22), "XXII");
  });
});

describe("romanToInt()", function () {
  it("Deve retornar 10", () => {
    assert.equal(romanToInt("X"), 10);
  });
  it("Deve retornar 25", () => {
    assert.equal(romanToInt("XXV"), 25);
  });
  it("Deve retornar 300", () => {
    assert.equal(romanToInt("CCC"), 300);
  });
  it("Deve retornar false", () => {
    assert.equal(romanToInt(""), false);
  });
  it("Deve retornar false", () => {
    assert.equal(romanToInt("blblaah"), false);
  });
  it("Deve retornar false", () => {
    assert.equal(romanToInt(123), false);
  });
});