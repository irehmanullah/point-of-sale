import passport from "passport";
import Model from "../models/user.model.js";

const create = async (req, res, next) => {
  const userInfo = req.body;
  const newUser = new Model({
    username: userInfo.username,
    lastName: userInfo.lastName,
    email: userInfo.email,
    phone: userInfo.phone,
    image: userInfo.image,
  });
  newUser.setPassword(userInfo.password);
  newUser
    .save()
    .then(async (result) => {
      res.status(201).json({
        message: `User ${userInfo.email} created successfully.`,
        id: result._id,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const login = (req, res, next) => {
  return passport.authenticate(
    "local",
    { session: false },
    async (err, passportUser, info) => {
      console.log(passportUser, "passport user");
      if (err) {
        next(err);
      }
      // let user;
      // user = passportUser;

      const accessToken = passportUser.generateJWT();
      const refreshToken = passportUser.generateRefreshJWT();

      return res.json(
        passportUser.toAuthJSON(accessToken, refreshToken, passportUser)
      );
    }
  )(req, res, next);
};

export default { create, login };
