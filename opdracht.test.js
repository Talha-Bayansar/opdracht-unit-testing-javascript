const { expect } = require("@jest/globals");
const opdracht = require("./opdracht");

test("starting situation", () => {
    expect(opdracht.stock).toBe(10);
    expect(opdracht.coins).toBe(10);
});

test("buying stocks", () => {
    expect(opdracht.buyStock(10)).toBe(20);
    expect(opdracht.coins).toBe(0);
});

test("selling stocks", () => {
    expect(opdracht.sellStock(20)).toBe(0);
    expect(opdracht.coins).toBe(20);
    expect(opdracht.stock).toBe(0);
});

test("promotion not possible", () => {
    expect(opdracht.promotion()).toBe(false);
});

test("buying stocks", () => {
    expect(opdracht.buyStock(10)).toBe(10);
    expect(opdracht.coins).toBe(10);
});

test("more orders then stock", () => {
    expect(opdracht.sellStock(50)).toBe(false);
});

test("renewing stocks when not empty", () => {
    expect(opdracht.renewStock()).toBe(false);
});

test("not enough coins", () => {
    expect(opdracht.buyStock(50)).toBe(false);
});

test("promotion", () => {
    expect(opdracht.promotion()).toBe(15);
});

test("adding positive number of coins", () => {
    expect(opdracht.addCoins(10)).toBe(20);
});

test("adding negative number of coins is not possible", () => {
    expect(opdracht.addCoins(-10)).toBe(false);
    expect(opdracht.coins).toBe(20);
});

test("subtract coins", () => {
    expect(opdracht.subtractCoins(5)).toBe(15);
});

test("subtracting negative number of coins is not possible", () => {
    expect(opdracht.addCoins(-10)).toBe(false);
    expect(opdracht.coins).toBe(15);
});