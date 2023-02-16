const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get("/home", (req, res) => {
    let search = req.query.search;
    let query = '%' + search + '%';

    if (!search) {
        Product.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(produtos => {
            res.render("admin/pages/home", {
                produtos
            });
        }).catch(err => console.log(err));
    } else {
        Product.findAll({
            where: { name: { [Op.like]: query } },
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(produtos => {
            res.render("admin/pages/search", {
                produtos, search
            })
        })
    }
});

router.post("/add-cart/:id", (req, res) => {
    let { productName, productPrice, productDescription, productReference, productCategory, productImage } = req.body;

    let id = req.body.id;


    Cart.create({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productReference: productReference,
        productCategory: productCategory,
        productImage: productImage
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.render('admin/pages/confirm-cart');
    });
});

module.exports = router;