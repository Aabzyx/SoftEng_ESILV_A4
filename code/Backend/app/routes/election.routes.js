const election = require("../controllers/election.controller");
module.exports = function(app) {
    const election = require('../controllers/election.controller');

    app.get('/api/election/chercherCode', election.chercher);

    // post request for election creation
    app.post('/api/election/createElection', election.createElection);

    // get all elections
    app.get('/api/election/getElection', election.findAll);
}
