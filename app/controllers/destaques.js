module.exports = function (app) {

    var controller = {};
    var model = app.models.destaques;


    controller.findAllActive = (req, res) => {
        const {Op} = require("sequelize");

        let condition = [
            {
                [Op.and]: [
                    {ativo: 1}, {
                        [Op.or]: [
                            {dataExpiracao: {[Op.is]: null}}, {dataExpiracao: {[Op.gte]: new Date()}}]
                    }
                ]
            }
        ];

        let columns = ['id', 'titulo', 'subtitulo', 'corBotao', 'urlImagem'];

        model.findAll({attributes: columns, where: condition})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                console.error(err)
                res.status(500).json({
                    message:
                    err.message
                });
            });
    };


    controller.create = (req, res) => {
        const destaque = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            corBotao: req.body.corBotao,
            urlImagem: req.body.urlImagem,
            dataExpiracao: req.body.dataExpiracao
        };

        model.create(destaque)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                    err.message
                });
            });
    }

    return controller;
};