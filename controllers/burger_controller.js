var express = require("express");
var burger = require("../models/burger.js");
var path = require("path");
var router = express.Router();

// create the router here
router.get("/", function(req, res) {
    burger.all(function(data) {
        var  hbsObject = {
            burgers: data
        };
        console.log("Burgercontroller" + hbsObject);
        res.render("index", hbsObject);
    });
}); 

router.post("/api/burger", function(req, res) {
    burger.create([
        "name", "status"
    ], [
        req.body.name, req.body.status
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    // should change status to devoured
    burger.update({
        status: req.body.status
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;