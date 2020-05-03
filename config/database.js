var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'site_fatec',
    password : 'VtieH7Vd6tRuuYJ9',
    database : 'site_fatec'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;