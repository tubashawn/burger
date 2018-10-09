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


    updateOne: function (objColVals, condition, cb) {
        var queryString = "UPDATE burgers";
        queryString += " SET " + objToSql(objColVals);
        queryString += " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
                if (err) {
                    throw err;
                }
                cb(res);
            });
    }
};

module.exports = orm;