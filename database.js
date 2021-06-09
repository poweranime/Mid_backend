const mysql_pkg = require("mysql");

var properties = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "market",
}
// it take a callback and passes the error into the callback if connection failed
var connection = mysql_pkg.createConnection(properties);

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("connected to mysql is successful");
    }
    });

    module.exports = {connection};