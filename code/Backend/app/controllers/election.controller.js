// import Election model
const Election = require('../models/election.model');

exports.chercher = (req, res) => {
    Election.findOne({code: req.body.code}, function (err,election) {
        if (res == null){
            res.status(401).json({ message: 'Non trouvé' });
        }
        else{
            res.send(election._id);
        }
    })
};
