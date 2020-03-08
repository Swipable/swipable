const db = require('../models');
const bcrypt = require('bcrypt');

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
    findOne: async function (req, res) {
        console.log('findOne in userController hit')
        let { username, password } = req.body;
        console.log({username, password})
        await db.Users
            .findOne({ where: { username:username } })
            .then((data) => {
                let user = data;
                console.log({user})
                if (user) {
                    console.log('got user data back from findOne call')
                    console.log(user.username)
                    console.log(user.password)
                    if (user.validPassword(password, user.password)) {
                        console.log('we have a valid user')
                        //  send response back telling front end that we have a valid user
                        return;
                    } else {
                        //  send redirect to login page
                        console.log("not a valid user")
                        return;
                   }
                }
                console.log("there is no user")
                
            })
            .catch(err => console.log(err));
},
    // **Set up to find a user, whose id is the current logged in session id, and display their saved favorites**
    findOneWithAssociations: function(req, res) {
        console.log('findOneWithAssociations in user-routes hit')
        db.Users
            .findOne({ where: { id: req.session.user.id, include: [db.Favorites] } })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
}