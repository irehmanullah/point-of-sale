import mongoose from "mongoose";

const connectToDB = (uri) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(uri)
      .then(() => {
        console.debug("Database connected...");
        resolve();
      })
      .catch((err) => {
        // next(err);
        console.error(err);
        reject();
      });
  });
};

export default connectToDB;
