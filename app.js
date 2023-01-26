const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./db/database");
const Cliente = require("./models/Cliente");

const product = require("./routes/produto");

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

app.get("/", (req, res) => {
    res.render("index");
});


app.use("/", product);



app.listen(8080, () => {
    console.log("Supermaket rodando!")
})