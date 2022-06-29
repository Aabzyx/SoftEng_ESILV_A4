// import Vote model
const Vote = require("../models/vote.model");

//CREATE a vote
exports.create = (req, res) => {
    let vote = new Vote(req.body);
    console.log(vote);
    vote.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};


//DELETE a vote
exports.delete = (req,res) => {
    Vote.findByIdAndRemove(req.params.id)
        .then(vote => {
            if(!vote){
                return res.status(404).send({
                    message: "Vote not found with id " +
                        req.params.id
                });
            }
            res.send({message: "Vote deleted successfully!"});

        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Vote not found with id " +
                        req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete vote with id " +
                    req.params.id
            });
        });
};

//Get a vote by its id
exports.getVote = (req, res) => {
    Vote.findById(req.params.id)
        .then(vote => {
            if(!vote) {
                return res.status(404).send({
                    message: "Vote not found with the id"
                });
            }
            res.send(vote)
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Vote not found with id " +
                        req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Product with id " +
                    req.params.id
            });

        });
}

//Get allVotes of a specific election
exports.getAllVotesOfElection = (req,res) => {
    Vote.find(req.body.actualElection.idElection === req.body.idElection)
        .then(votes => {
            res.send(votes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        })
}

