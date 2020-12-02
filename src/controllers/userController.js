const jwt = require('jsonwebtoken');
const passport = require('passport');

function createToken(){
    const payload = {};
    return jwt.sign(payload,'senha-secreta');

}


module.exports = {

    login: (request, response)=>{
        const token = createToken();
        response.set('Authorization', token);
    response.status(204).send();
    }

}