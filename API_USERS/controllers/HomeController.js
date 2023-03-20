class HomeController{

    async index(req, res){
        res.send("Seja bem-vindo(a) a API de usuários, essa API foi criada no curso de Formação Node.JS");
    }

}

module.exports = new HomeController();