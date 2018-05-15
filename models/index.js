var mongoose = require("mongoose");


if (process.env.NODE_ENV == "production") {
  console.log("process.env is " + process.env.NODE_ENV);
  mongoose.connect(process.env.MLAB_URL)
  console.log("executing MLAB ....")
} else {
  mongoose.connect("mongodb://localhost/Marvel");
  console.log("executing localhost ....")
}

module.exports.Character = require("./character.js");
module.exports.Place = require("./place.js");
