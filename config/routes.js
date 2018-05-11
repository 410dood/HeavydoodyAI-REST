var express = require('express');
var router = express.Router();
var userController = require('../controller/images');
var imageController = require('../controller/users');

router.get('/api/image', imageController.imageIndex);
router.get('/api/image/:image', imageController.imageIndexID);

router.get('/api/users', userController.userIndex);

module.exports = router;