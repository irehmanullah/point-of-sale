import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    username: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    local: {
      hash: { type: String },
      salt: { type: String },
    },
    accessToken: { type: String },
    refreshToken: { type: String },
    resetPasswordToken: { type: String, required: false },
    resetPasswordExpires: { type: Date, required: false },
  },
  {
    writeConcern: {
      w: 0,
      j: true,
      wtimeout: 1000,
    },
    strict: false,
    strictPopulate: false,
    versionKey: false,
    timestamps: true,
    collection: "users",
  }
);

Model.methods.setPassword = function (password) {
  this.local.salt = crypto.randomBytes(16).toString("hex");
  this.local.hash = crypto
    .pbkdf2Sync(password, this.local.salt, 128, 128, "sha512")
    .toString("hex");
};

Model.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.local.salt, 128, 128, "sha512")
    .toString("hex");
  return this.local.hash === hash;
};

Model.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate());

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};
Model.methods.generateRefreshJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate());

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
    },
    process.env.REFRESH_JWT_SECRET,
    { expiresIn: "7d" }
  );
};

Model.methods.toAuthJSON = function (accessToken, refreshToken, user) {
  return {
    userId: user._id,
    email: user.email,
    username: user.username,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

Model.methods.setToken = function (accessToken, refreshToken) {
  this.accessToken = accessToken;
  this.refreshToken = refreshToken;
};

export default mongoose.model("User", Model);
