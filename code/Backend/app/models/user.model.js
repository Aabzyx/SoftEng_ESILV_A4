const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  idUser: {
    type: Number,
    index: true,
    required: true
  },

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

module.exports = mongoose.model("User",UserSchema);