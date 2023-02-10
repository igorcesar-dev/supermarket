const express = require("express");
const router = express.Router();
const Produto = require("../models/Product");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



router.get("/shopping-cart", (req, res) => {
    res.render("admin/pages/cart")
})