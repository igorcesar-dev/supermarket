const express = require("express");
const router = express.Router();
const Produto = require("../models/Product");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get("/home", (req, res) => {
    let search = req.query.produto;
    let query = '%' + search + '%';

    if (!search) {
        Produto.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(produtos => {
            res.render("admin/pages/home", {
                produtos
            });
        }).catch(err => console.log(err));
    } else {
        Produto.findAll({
            where: { nome: { [Op.like]: query } },
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(produtos => {
            res.render("admin/pages/home", {
                produtos, search
            })
        })
    }
});

module.exports = router;