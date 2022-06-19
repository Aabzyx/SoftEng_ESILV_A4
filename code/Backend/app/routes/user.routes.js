module.exports = function(app) {
    const user = require('../controllers/user.controller');

    // post request for user registration
    app.post('/api/user/register', user.register);

    // post request for user log in
    app.post('/api/user/login', user.signIn);
}