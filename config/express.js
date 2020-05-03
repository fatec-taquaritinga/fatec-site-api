const load = require('express-load');
const bodyParser = require('body-parser');

const cors = require('cors');
const express = require('express');


module.exports = function(db) {
    const app = express();

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


	app.set('port', 3000);
	
    return app;
};