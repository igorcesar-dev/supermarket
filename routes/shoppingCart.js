const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get("/shopping-cart", (req, res) => {
    Product.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(produtos => {
        res.render("admin/pages/cart", {
            produtos
        });
    }).catch(err => console.log(err));
})

module.exports = router;