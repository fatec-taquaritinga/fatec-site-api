require('dotenv').config()

const http = require('http');
const db = require("./config/sequelize");

db.sequelize.sync();

let app = require('./config/express.js')(db);
let port = process.env.PORT || app.get('port');

http.createServer(app).listen(port ,
    function() {
        console.log('Servidor em execução na porta ' + port);
    }
);