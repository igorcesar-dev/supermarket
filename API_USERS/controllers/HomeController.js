class HomeController{

    async index(req, res){
        res.send("Seja bem-vindo(a) a API de usuários, essa API foi criada no curso de Formação Node.JS");
    }

    async validate(req, res){
        res.send("ok");
    }

}

module.exports = new HomeController();