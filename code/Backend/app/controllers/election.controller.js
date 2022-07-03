// import Election model
const Election = require('../models/election.model');
const http = require("http");
const bcrypt = require("bcryptjs");
const Vote = require("../models/vote.model");

exports.chercher = (req, res) => {
    Election.findOne({code: req.body.code}, function (err, election) {
        if (election == null){
            res.status(401).json({ message: 'Non trouvé' });
        }
        else if (election.code === req.body.code){
                res.send(election._id);
            }
            else {
                res.status(402).json({ message: 'Pas le bon match entre le nom et lid' });
            }
    })
};

exports.createElection = (req, res) => {
  let newElection = new Election(req.body);
  console.log(newElection);
  const err = newElection.validateSync();
  if (err) {
    res.status(500).send({
      message: err.message
    });
  } else {

    //Crée code ?
    for(let i = 0; i<(newElection.choix.length); i++) {
      newElection.resultats.push(0);
    }

    const min = Math.ceil(0);
    const max = Math.floor(9999);

    const intCode = Math.floor(Math.random() * (max - min + 1)) + min;

    let strCode = intCode.toString();
    while(strCode.length < 4) {
      strCode = "0"+strCode;
    }

    newElection.code = strCode;

    newElection.save()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(501).send({
          message: err.message
        });
      });
  }
};

exports.findAll = (req, res) => {
    Election.find()
        .then(elections => {
            res.send(elections);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.deleteElection = (req, res) => {
  Election.findByIdAndRemove(req.params._id)
      .then(election => {
          if(!election){
              return res.status(404).send({
                  message: "Election not found with id " +
                      req.params.id
              });
          }
          res.send({message: "Election deleted successfully!"});

      })
      .catch(err => {
          if (err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Election not found with id " +
                      req.params.id
              });
          }
          return res.status(500).send({
              message: "Could not delete election with id " +
                  req.params.id
          });
      });
}

//ajouter vote à l'election
exports.updateElection = (req, res) =>{
    Election.findOneAndUpdate({ _id: req.body._id},
        {$set : {resultats: req.body.resultats}},{new: true})
        .then(elec => {
            console.log(elec);
            if(!elec) {
                return res.status(404).send({
                    message: "User not found with id " +
                        req.body._id
                });
            }
            res.send(elec);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " +
                        req.body._id
                });
            }
            return res.status(500).send({

                message: "Error updating user with id " +
                    req.body._id
            });
        });
}

