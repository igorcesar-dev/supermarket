const Sequelize = require("sequelize");
const connection = require("../db/database");


const Produto = connection.define("produto", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    referencia:{
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


Produto.sync({force: false}).then(() => {
    console.log("Tabela cliente criada com sucesso!")
})