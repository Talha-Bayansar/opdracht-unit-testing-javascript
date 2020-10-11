const { expect } = require("@jest/globals");
const opdracht = require("./opdracht");

test("starting situation", () => {
    expect().toBe();
});

test("buying stocks", () => {
    expect(opdracht.buyStock(10)).toBe(10);
});

test("selling stocks", () => {
    expect(opdracht.sellStock(10)).toBe(0);
});

test("promotion", () => {
    expect(opdracht.promotion()).toBe(0);
});

test("", () => {
    expect().toBe();
});