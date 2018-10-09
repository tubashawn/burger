var connection = require("../config/connection.js");

var orm = {
    // selectAll() method here
    all: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne() method here
    insertOne: function (cols, vals, cb) {
        var queryString = "INSERT INTO burgers";
        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + vals + ");";
        console.log(queryString);
        connection.query(queryString, vals, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },


    updateOne: function (cols, vals, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        console.log(queryString);
        connection.query(queryString,
            [cols, vals],
            function (err, res) {
                if (err) {
                    throw err;
                }
                cb(res);
            });
    }
};

module.exports = orm;