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
    productImage:{
        type: Sequelize.STRING
    },
    productReference:{
        type: Sequelize.STRING,
        allowNull: false
    },
    productCategory:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


Cart.sync({force: false}).then(() => {
    console.log("Cart table successfully created!")
})

module.exports = Cart;