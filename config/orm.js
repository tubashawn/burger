var connection = require("../config/connection.js");

var orm = {
    // selectAll() method here
    all: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        } cb(result);
    });
}, 
// insertOne() method here
    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers";
        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + vals + ");";

        connection.query(queryString, vals, function(err, results) {
            if (err) {
                throw err;
            } cb(results);
        });
    },
    // updateOne() method here
    // not sure how to do the update method
//     updateOne: function(table, cols, updateInfo) {
//         var queryString = "UPDATE burgers SET  ";
//     };
};

module.exports = orm;
