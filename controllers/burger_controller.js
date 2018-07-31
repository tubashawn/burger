var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// create the router here
router.get("/", function(req, res) {
    burger.all(function(data) {
        var  hbsObject = {
            burgers: data
        };
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
        name: req.body.name
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.export = router;