const Sequelize = require("sequelize");
const connection = require("../db/database");

// Model definition
const Cliente = connection.define('cliente', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    estado:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rua:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numero:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Cliente.sync({force: false}).then(() => {
    console.log("Tabela cliente criada com sucesso!")
})

