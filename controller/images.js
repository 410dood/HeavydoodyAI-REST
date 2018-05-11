var db = require('../models');
var Image = db.image;

function imageIndex(req, res) {
    db
        .Image
        .find({}, function (err, images) {
            if (err) 
                res.send(err);
            else 
                res.json(images);
            }
        );
}

function imageIndexID(req, res) {
    db
        .Image
        .findOne({
            image_id: req.params.image_id
        }, function (err, imageID) {
            if (err) 
                res.send(err);
            else 
                res.json(imageID);
            }
        );
}

function imageCreate(req, res) {}

function imageShow(req, res) {}

function imageUpdate(req, res) {}

function imageDestroy(req, res) {}

module.exports.imageIndex = imageIndex;
module.exports.imageIndexID = imageIndexID;
module.exports.imageCreate = imageCreate;
module.exports.imageShow = imageShow;
module.exports.imageUpdate = imageUpdate;
module.exports.imageDestroy = imageDestroy;