const mongoose = require("mongoose");

const ElectionSchema = mongoose.Schema({
    idElection: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },

    nom: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim: true
    },

    urlImage: {
        type: String,
        trim: true
    },

    type: {
        type: String,
        enum: ['informel','officiel'],
        required: true
    },

    choix: {
        type: [String],
        required: true
    },

    resultats: {
        type: [Number],
        default: []
    },

    dates: {  //dates de début et fin
        type: [Date],
        default: [Date.now()]
    },

    preview: {  //aperçu en direct des résultats
        type: Boolean,
        default: true
    },

    code: {  //code généré pour rejoindre l'élection
        type: String,
    },

    limite: {  //limite maximale de personne
        type: Number
    }
})

module.exports = mongoose.model("Election",ElectionSchema);