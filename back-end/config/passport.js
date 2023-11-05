import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.model.js";

passport.use(
  "local",
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, next) => {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            const error = new Error("User not found with this email.");
            error.statusCode = 404;
            throw error;
          }
          if (!user.validatePassword(password)) {
            const error = new Error("Password incorrect.");
            error.statusCode = 400;
            throw error;
          }
          next(null, user);
        })
        .catch((err) => {
          next(err);
        });
    }
  )
);

export default passport;
