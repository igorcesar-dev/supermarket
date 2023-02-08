const Sequelize = require("sequelize");
const connection = require("../db/database");


const Cart = connection.define("cart", {
    productName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    productPrice:{
        type: Sequelize.STRING,
        allowNull: false
    },
    productDescription:{
        type: Sequelize.STRING,
        allowNull: false
    },
    productQuantity:{
        type: Sequelize.STRING,
        allowNull: false
    },
    productImage:{
        type: Sequelize.STRING
    }
})


Cart.sync({force: false}).then(() => {
    console.log("Cart table successfully created!")
})

module.exports = Produto;