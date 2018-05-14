var express = require('express');
var router = express.Router();
var userController = require('../controller/images');
var imageController = require('../controller/users');

router.get('/api/image', imageController.index);
router.post('/api/posts', imageController.create)

router.put('/api/posts/:post_id', imageController.update)

router.get('/api/posts/:post_id', imageController.show)

router.delete('/api/posts/:post_id', imageController.destroy)

router.get('/api/image/:image', imageController.imageIndexID);

router.get('/api/users', userController.userIndex);

module.exports = router;