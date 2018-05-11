var db = require("../models");

var userSeedList = [
    {
        name: "Bob",
        email: "bob@yahoo.com"
    }, {
        name: "Bill",
        email: "wdoody@yahoo.com"
    }
];

var imageSeedList = [
    {
        image: "https://i.imgur.com/8shthsv.jpg"
    }, {
        image: "https://i.imgur.com/s2i1MZ9.png"
    }, {
        image: "https://i.imgur.com/ky1Z76C.png"
    }
];

db
    .User
    .remove({}, function (err, deleteResults) {
        db
            .User
            .create(userSeedList, function (err, users) {
                console.log("running seed file");
                console.log(users);
            });
    });

db
    .Image
    .remove({}, function (err, deleteResults) {
        db
            .Image
            .create(imageSeedList, function (err, images) {
                console.log("running seed file");
                console.log(images);
            });
    });