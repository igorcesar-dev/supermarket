const express = require("express");
const router = express.Router();
const Produto = require("../models/Product");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//button with router to  create a new product;
router.get("/admin/produto/novo", (req, res) => {
    res.render("admin/product/create")
});

router.post("/produto/save", (req, res) => {
    let { nome, preco, descricao, quantidade, referencia, categoria } = req.body;

    Produto.create({
        nome: nome,
        preco: preco,
        descricao: descricao,
        quantidade: quantidade,
        referencia: referencia,
        categoria: categoria
    })
        .then(() => res.render('admin/product/confirm'))
});

//router to get all products;
router.get("/admin/produtos", (req, res) => {
    let search = req.query.produto;
    let query = '%' + search + '%';

    if (!search) {
        Produto.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(produtos => {
            res.render("admin/product/products", {
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
            res.render("admin/product/products", {
                produtos, search
            })
        })
    }
});

//route to get produto with id;
router.get("/admin/produtos/edit/:id", (req, res) => {
    res.send("rota de exibir um produto pelo id")
});

//route to exclude produto;
router.post("/admin/product/delete", (req, res) => {
    let id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Produto.destroy({
                where: { id: id }
            }).then(() => {
                res.redirect("/admin/produtos")
            });
        } else {
            res.redirect("/admin/produtos")
        }
    } else {
        res.redirect("/admin/produtos")
    }
});

//route to update produto;
router.get("/admin/produtos/atualizar/:id", (req, res) => {
    res.send("rota de atualizar um produto")
});

module.exports = router;