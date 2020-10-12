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

test("more orders then stock", () => {
    expect(opdracht.sellStock(50)).toBe(false);
});

test("renewing stocks when not empty", () => {
    opdracht.buyStock(10);
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

test('getting a new order', () => {
    expect(opdracht.addOrder(5)).toEqual([5]);
});

test('finishing an order', () => {
    expect(opdracht.deleteOrder(5)).toEqual([]);
});

test('process an order', () => {
    opdracht.addOrder(5);
    opdracht.processOrder(5);
    expect(opdracht.stock).toBe(10);
    expect(opdracht.coins).toBe(20);
});

test('processing a non existing order', () => {
    opdracht.addOrder(10);
    expect(opdracht.processOrder(5)).toBe(false);
});

test('getting multiple orders', () => {
    expect(opdracht.addMultipleOrders([3, 7, 10])).toEqual([10, 3, 7, 10]);
});

test('getting multiple orders in a wrong format', () => {
    expect(opdracht.addMultipleOrders([0])).toEqual(false);
    expect(opdracht.addMultipleOrders([-5])).toBe(false);
    expect(opdracht.addMultipleOrders([])).toBe(false);
});

test('delete all available orders', () => {
    expect(opdracht.deleteAllOrders()).toEqual([]);
    expect(opdracht.orders).toEqual([]);
});

test('processing all the orders', () => {
    opdracht.addCoins(10);
    opdracht.buyStock(30);
    opdracht.addMultipleOrders([3, 5, 2, 10, 20]);
    opdracht.processAllOrders();
    expect(opdracht.orders).toEqual([]);
});

test('process all orders when you do not have enough stock', () => {
    opdracht.buyStock(20);
    opdracht.addMultipleOrders([10, 20]);
    opdracht.processAllOrders();
    expect(opdracht.orders).toEqual([10, 20]);
});

test('order all orders from low to high', () => {
    opdracht.addOrder(5);
    opdracht.sortOrders();
    expect(opdracht.orders).toEqual([5, 10, 20]);
});

// test('process all possible orders', () => {
//     opdracht.processAllPossibleOrders();
//     expect(opdracht.orders).toEqual([20]);
// });