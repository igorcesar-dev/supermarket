const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


//router to create a new product;
router.get("/admin/produto/novo", (req, res) => {
    res.render("admin/product/create")
});

//router to get all products;
router.get("/admin/produtos", (req, res) => {
    res.send("rota de exibir todos os produtos")
});

//route to get produto with id;
router.get("/admin/produtos/:id", (req, res) => {
    res.send("rota de exibir um produto pelo id")
});

//route to exclude produto;
router.get("/admin/produtos/excluir/:id", (req, res) => {
    res.send("rota de excluir um produto")
});

//route to update produto;
router.get("/admin/produtos/atualizar/:id", (req, res) => {
    res.send("rota de atualizar um produto")
});

module.exports = router;