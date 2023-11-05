import passport from "passport";
import userModel from "../models/user.model.js";

const userLogin = (req, res, next) => {
  console.log(req.body, "req nody");
  const userInfo = { ...req.body };

  // Ensuring user have valid email and password:
  if (!userInfo.email || !userInfo.password) {
    return res.status(400).json({
      message: "Email and password is required.",
    });
  }

  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }
      userModel
        .findOne({ email: userInfo.email })
        .then((user) => {
          return next();
        })
        .catch((err) => next(err));
    }
  )(req, res, next);
};

export default { userLogin };
