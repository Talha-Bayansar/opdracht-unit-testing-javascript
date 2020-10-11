const opdracht = {
    stock: 10,
    coins: 10,
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
};

module.exports = opdracht;