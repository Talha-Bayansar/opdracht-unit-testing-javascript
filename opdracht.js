const opdracht = {
    stock: 0,
    buyStock: (amount) => {opdracht.stock += amount; return opdracht.stock},
    sellStock: (amount) => {opdracht.stock -= amount; return opdracht.stock},
    promotion: () => {opdracht.stock >= 20 ? opdracht.stock += 5 : opdracht.stock = opdracht.stock; return opdracht.stock},

};

module.exports = opdracht;