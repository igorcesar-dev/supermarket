const Sequelize = require("sequelize");
const connection = require("../db/database");


const Product = connection.define("product", {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity:{
        type: Sequelize.STRING,
        allowNull: false
    },
    reference:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING
    }
})


Product.sync({force: false}).then(() => {
    console.log("Product table successfully created!")
})

module.exports = Product;