//require('dotenv').config()

var http = require('http');
var sql = require('./config/database.js');
var app = require('./config/express.js')(sql);

http.createServer(app).listen(app.get('port'),
    function() {
        console.log('Servidor em execução na porta ' + app.get('port'));
    }
);