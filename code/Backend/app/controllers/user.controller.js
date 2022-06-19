// import User model
const User = require("../models/user.model");

// import bcryptjs - hashing function
const bcrypt = require('bcryptjs');

// User Register function
exports.register = (req, res) => {
    let newUser = new User(req.body);
    //Crypter le mdp
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    newUser.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// User Sign function
exports.signIn = (req, res) => {
    User.findOne({email: req.body.email}, function (err, user) {
        //verif authorization
        if (!user.authorization()){
            res.status(402).json({ message: 'Authorization failed. No access'});
        }
        //verif password
        else if (!user.comparePassword(req.body.hash_password)) {
            res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }
        else
        {
            res.send(user)
        }

    });
}