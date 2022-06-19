const mongoose = require("mongoose");

const VoteSchema = mongoose.Schema({
  idVote: {
    type: Number,
    index: true,
    required: true
  },

  idUser: {  //idUser de celui qui a voté
    type: Number,
    required: true
  },

  idElection: {  //idELection de l'élection pour lequel l'user a voté
    type: Number,
    required: true
  },

  choix: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Vote",VoteSchema);