
module.exports = (app) => {

    let db = app.get('db');

    const destaques = db.sequelize.define("destaques", {
        titulo: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        subtitulo: {
            type: db.Sequelize.STRING
        },
        corBotao: {
            type: db.Sequelize.STRING
        },
        urlImagem: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        dataExpiracao: {
            type: db.Sequelize.DATE
        },
        ativo: {
            type: db.Sequelize.BOOLEAN,
            defaultValue: true
        }
    });

    return destaques;
};
