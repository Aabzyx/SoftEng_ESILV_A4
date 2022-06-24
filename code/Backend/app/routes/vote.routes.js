module.exports = function(app) {
    const vote = require('../controllers/vote.controller');

    //Create a vote
    app.post('/api/vote', vote.create);

    //Delete a vote
    app.delete('/api/vote/:id', vote.delete);

    //Get one vote
    app.get('/api/vote/:id',vote.getVote);

    //Get all votes
    app.get('/api/votes/:id', vote.getAllVotesOfElection);


}