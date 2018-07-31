var orm = require("../config/orm.js");

// call the orm functions here
var burger = {
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(cols, vals, cb) {
        orm.updateOne(cols, vals, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;