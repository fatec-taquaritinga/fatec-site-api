const load = require('express-load');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const Sequelize = require('sequelize');

module.exports = function(db) {
    const app = express();

    app.set('port', 3000);

    app.set('db', db);

    app.use("/", express.static("./public"));

    app.use(express.json({
        extended: true
    }));
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(require('method-override')('_method'));

	//enables cors
	app.use(cors({
	  'allowedHeaders': ['sessionId', 'Content-Type'],
	  'exposedHeaders': ['sessionId'],
	  'origin': '*',
	  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	  'preflightContinue': false
	}));

    load('models',{
        cwd: 'app'
    }).then('controllers').then('routes').into(app);

    return app;
};