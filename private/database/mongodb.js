const mongoose = require("mongoose");

module.exports = (db_name) => {
  return mongoose.connect(
    `mongodb://localhost/${db_name}`,
    () => {
      console.log("MongoDB Connection Successful");
    },
    (e) => console.error(e)
  );
};
