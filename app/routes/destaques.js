module.exports = function(app) {
    var controller = app.controllers.destaques;

    app.get('/api/destaques', controller.findAllActive);
    app.post('/api/destaques', controller.create);

};