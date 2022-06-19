const mongoose = require("mongoose");

//clef secrete
const key = "uiaezhf§è!çseufh6789GZzufhzuidfh7Z7DçGFZçZIFZFUZG31261&&&dbhzjd";

// import bcryptjs - hashing function
const bcrypt = require('bcryptjs');

// import jsonwebtoken
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    nom: {
        type: String,
        trim: true,
        required: true
    },

    prenom: {
        type: String,
        trim: true,
        required: true
    },

    mail: {
        type: String,
        index: true,
        lowercase: true,
        trim: true,
        required: true
    },

    password: {  //est chiffré
        type: String,
        required: true
    },

    dateDeNaissance: {
        type: Date,
        required: true
    },

    local: {  //département/région/pays
        type: [String],
        default: []
    },

    urlImage: {  //url de l'image du profil
        type: String,
        trim : true
    },

    subscription: {
        type: String,
        enum: ['free','premium','super-premium'],
        required: true
    },

    numElecteur: {
        type: String,
    },

    autorisedElections: {
        type: [Number],
        default: []
    }
})

//Create a Schema method to compare password
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

//Fonction qui génere un token qu'on vérifiera par la suite
UserSchema.methods.generateAuthToken = function(){
    const user = this;
    const token = jwt.sign(
        {
            _id: user._id,
            nom: user.nom,
            prenom: user.prenom,
            mail: user.mail,
            password: user.password,
            dateDeNaissance: user.dateDeNaissance,
            local: user.local,
            urlImage: user.urlImage,
            subscription: user.subscription,
            numElecteur: user.numElecteur,
            autorisedElections: user.autorisedElections
        }, key
    );
    return token;
}

//Fonction qui vérifie le token
UserSchema.methods.authorization = function () {
    const token = this.generateAuthToken();
    try {
        jwt.verify(token, key);
        return true
    } catch (err) {
        return false;
    }
}

module.exports = mongoose.model("User",UserSchema);