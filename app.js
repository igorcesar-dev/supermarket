const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./db/database");

const productController = require("./routes/product");
const homeController = require("./routes/home");
const cartController = require("./routes/shoppingCart");

const Product = require("./models/Product")
const Cart = require("./models/Cart")



//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados: OK");
    }).catch(() => {
        console.log("Conexão com o banco de dados: ERRO");
    })


//visualizer engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

//body parser configuration
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", productController);
app.use("/", homeController);
app.use("/", cartController);



app.get("/", (req, res) => {
    res.render("index");
});


app.listen(8080, () => {
    console.log("Supermaket rodando!")
});