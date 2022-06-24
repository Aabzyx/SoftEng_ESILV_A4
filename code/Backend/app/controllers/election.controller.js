// import Election model
const Election = require('../models/election.model');

exports.chercher = (req, res) => {
    Election.findOne({code: req.body.code}, function (err, election) {
        if (election == null){
            res.status(401).json({ message: 'Non trouvé' });
        }
        else if (election.nom === req.body.nom){
                res.send(election._id);
            }
            else {
                res.status(402).json({ message: 'Pas le bon match entre le nom et lid' });
            }
    })
};


exports.createElection = (req, res) => {
  let newElection = new Election(req.body);
  const err = newElection.validateSync();
  if (err) {
    res.status(500).send({
      message: err.message
    });
  } else {

    //Crée code ?
    for(let i = 0; i<=(newElection.choix.length); i++) {
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
        res.status(500).send({
          message: err.message
        });
      });
  }
};

