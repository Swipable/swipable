const db = require('../models');
const bcrypt = require('bcrypt');
//const passport = require('../passport/localStrategy');
//const isAuthenticated = require('../passport/middleware/isAuthenticated');

module.exports = {
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
                const created = true;
                res.json(created && data);
                return;
            })
            .catch(err => {
                const created = false;
                return res.json(err && created)
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
                    if (user.validPassword(password, user.password)) {
                        console.log('we have a valid user')
                   //     req.session.user = user.dataValues;
                        console.log(req.session)
                        res.json(user)
                        //  send response back telling front end that we have a valid user
                        return;
                   }
                } else if (!user) {
                    console.log('no user')
                    res.json('no user found')
                    return;
                } else {
                    console.log("no user exists")
                    res.json('no user exists') 
                    return;
                }
                
                
   }
            )
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