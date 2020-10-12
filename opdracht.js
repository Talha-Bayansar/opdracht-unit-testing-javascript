const opdracht = {
    stock: 10,
    coins: 10,
    orders: [],
    buyStock: (amount) => {
        if(opdracht.coins < amount){
            return false;
        }
        opdracht.stock += amount;
        opdracht.coins -= amount;
        return opdracht.stock
    },
    sellStock: (amount) => {
        if(amount > opdracht.stock){
            return false;
        }else{
            opdracht.stock -= amount;
            opdracht.coins += amount;
            return opdracht.stock;
        }
    },
    promotion: () => {
        if(opdracht.stock >= 10){
            opdracht.stock += 5;
            return opdracht.stock;
        }else{
            return false;
        }
    },
    renewStock: () => opdracht.stock == 0 && opdracht.buyStock(10),
    addCoins: (amount) => {
        if(amount < 0){
            return false;
        }
        opdracht.coins += amount;
        return opdracht.coins
    },
    subtractCoins: (amount) => {
        if(amount < 0){
            return false;
        }
        opdracht.coins -= amount;
        return opdracht.coins
    },
    addOrder: (amount) => {
        opdracht.orders.push(amount);
        return opdracht.orders;
    },
    deleteOrder: (orderNumber) => {
        opdracht.orders = opdracht.orders.filter(p => p !== orderNumber);
        return opdracht.orders;
    },
    processOrder: (orderNumber) => {
        if(opdracht.orders.find(p => p===orderNumber)){
            opdracht.sellStock(orderNumber);
            opdracht.deleteOrder(orderNumber);
        }else{
            return false;
        }
    },
    addMultipleOrders: (array) => {
        if(array.length === 0){
            return false;
        }
        if(array.find(e => e <= 0) <= 0){
            return false;
        }else{
            array.forEach(e => opdracht.orders.push(e));
            return opdracht.orders;
        }
    },
    deleteAllOrders: () => {
        return opdracht.orders = [];
    },
    processAllOrders: () => {
        if(opdracht.orders.reduce((total, e) => total += e, 0) > opdracht.stock){
            return;
        }else{
            opdracht.orders.forEach(o => {opdracht.processOrder(o);});
        }
    },
    sortOrders: () => {
        opdracht.orders.sort((a, b) => a - b);
    }
};

module.exports = opdracht;