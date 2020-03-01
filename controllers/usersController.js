const db = require('../models');

module.exports = {
    test: (req, res) => {
        console.log('back and front end talking - tes hit')
        console.log(res)
    },
    findAll: function (req, res) {
        db.Users
        .findAll({})
        .then((data) => {
            console.log('userController - findAll hit')
            console.log(data)
            res.json(data)
        })
        .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log('create in user-routes hit')
        db.Users
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}