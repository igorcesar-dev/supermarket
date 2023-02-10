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
    let { name, price, description, quantity, reference, category, image } = req.body;

    Produto.create({
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        reference: reference,
        category: category,
        image: image
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
            where: { name: { [Op.like]: query } },
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
router.get("/admin/produto/edit/:id", (req, res) => {
        let id = req.params.id;
    
        Produto.findByPk(id).then(produto => {
            if(produto != undefined) {
                Produto.findAll().then(produtos => {
                    res.render("admin/product/edit", { produto: produto });
                })
            }else {
                res.redirect("/admin/produtos");
            }
        }).catch(err => {
            res.redirect("/admin/produtos");
        })
    })

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

router.post("/produto/atualizar/:id", (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let quantity = req.body.quantity;
    let reference = req.body.reference;
    let category = req.body.category;
    let image = req.body.image;

    Produto.update({
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        reference: reference,
        category: category,
        image: image
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/produtos")
    })
})

module.exports = router;