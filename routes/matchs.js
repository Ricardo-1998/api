var express = require('express');
var router = express.Router();
var matchs = require('../models/Match');

/* GET matchs listing. */
router.get('/', function (req, res, next) {
  matchs.find({}, (err, docs) => {
    if (err) {
      res.status(400).json({
        "success": false
      })
    } else {
      res.status(200).json({
        "success": true,
        docs
      })
    }
  })
});

/* GET matchs by id listing*/
router.get("/:id", function (req, res, next) {
  var id = req.params.id || "";
  if (id === "") {
    res.status(400).json({
      "success": false
    });
  } else {
    matchs.findById(id, (err, match) => {
      if (err) {
        res.status(400).json({
          "success": false
        });
      } else {
        res.status(200).json({
          "success": true,
          match
        });
      }
    });
  }
});

/* PUT match listing */
router.put("/", function(req,res,next){
    let data = {
      name: req.body.name,
      value: req.body.value
    };

    var match = new matchs(data);
    match.save((err,iMatch)=>{
      if (err){
        res.status(400).json({"success": false})
      } else {
        res.status(200).json({"success": true, iMatch})
      }
    });
});


module.exports = router;