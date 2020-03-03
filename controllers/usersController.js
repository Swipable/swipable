const db = require('../models');

module.exports = {
    test: (req, res) => {
        console.log('back and front end talking - test hit')
        console.log(res)
    },
    findAll: function (req, res) {
        db.Users
            .findAll({})
            .then((data) => {
                console.log('userController - findAll hit')
                res.json(data)
            })
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log('create in user-routes hit')
        db.Users
            .create(req.body)
            .then((data) => { 
                req.session.data = data.dataValues;
                console.log(req.session.data.username);
                res.json(data);
            })
            .catch(err => {
                res.status(422).json(err)
                res.redirect('/signup');
            })
    },
    //Below are set up for handling login
    findOne: function(req, res) {
        console.log('findOne in user-routes hit')
        db.Users
            .findOne({ where: { username: inputUsername }})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    // **Set up to find a user, whose id is the current logged in session id, and display their saved favorites**
    findOneWithAssociations: function(req, res) {
        console.log('findOneWithAssociations in user-routes hit')
        db.Users
            .findOne({ where: { id: req.session.user.id, include: [db.Favorites] } })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}