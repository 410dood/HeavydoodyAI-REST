var express = require('express');
var router = express.Router();
var characterController = require('../controller/characters');
var placeController = require('../controller/places');

//CHARACTER ROUTES
router.get('/api/characters', characterController.characterIndex);
router.get('/api/heroes', characterController.characterHeroIndex);
router.get('/api/villains', characterController.characterVillainIndex);

router.post('/api/characters', characterController.characterHeroCreate);
router.put('/api/characters', characterController.characterUpdate);




//PLACES ROUTES
router.get('/api/places/', placeController.placeIndex);
router.get('/api/places/:place_id', placeController.placeIndexID);
router.post('/api/places', placeController.placeCreate);
router.put("/api/places", placeController.placeUpdate);


module.exports = router;
