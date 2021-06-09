var mysql      = require('mysql');

function mysqlClient() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'express_demo'
    });

    connection.connect();

    return connection;
}


exports.mClient = mysqlClient;
