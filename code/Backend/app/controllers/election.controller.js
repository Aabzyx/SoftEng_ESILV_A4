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
