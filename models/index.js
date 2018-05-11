var mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
    console.log("process.env is " + process.env.NODE_ENV);
    mongoose.connect(process.env.MLAB_URL)
    console.log("connected to mlab")
} else {
    mongoose.connect("mongodb://localhost/heavydoodyai-rest");
    console.log("db connected on localhost ")
}

module.exports.User = require("./user.js");
module.exports.Image = require("./image.js");