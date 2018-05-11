var db = require('../models');
var User = db.user;

function userIndex(req, res) {
    db
        .User
        .find({}, function (err, users) {
            if (err) 
                res.send(err);
            else 
                res.json(users);
            }
        );
}

function userCreate(req, res) {}

function userShow(req, res) {}

function userUpdate(req, res) {}

function userDestroy(req, res) {}

module.exports.userIndex = userIndex;
module.exports.userCreate = userCreate;
module.exports.userShow = userShow;
module.exports.userUpdate = userUpdate;
module.exports.userDestroy = userDestroy;