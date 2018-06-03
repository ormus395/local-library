const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  bcrypt = require("bcryptjs"),
  User = require("../db/models").User;

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email"
      },
      function(username, password, done) {
        User.find({ where: { email: username } })
          .then(user => {
            if (!user) {
              return done(null, false);
            }
            bcrypt.compare(password, user.password).then(res => {
              if (res) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          })
          .catch();
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user.dataValues.UserId);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch(err => done(err, false));
  });
};
