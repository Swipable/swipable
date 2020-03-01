const db = require("../models");

module.exports = {
  test: (req, res) => {
    console.log("back and front end talking");
    console.log(res);
  },
  findAll: function(req, res, next) {
    db.Users.findAll({})
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => res.status(422).json(err));
    next();
  },
  create: function(req, res) {
    db.Users.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
