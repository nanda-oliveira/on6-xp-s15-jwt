const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy({
        usernameField:"email",
        passwordField:"senha",
        session: false
    }, (email, senha,done)=>{
//autenticar usuario
//buscar o usuario no banco de dados
//const usuario = buscar no 
        done(null, {})
    })
); 
