const express = require('express');
const sauceCtrl = require('../controllers/sauce');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, multer, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce );
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce);
router.get('/', auth, multer, sauceCtrl.getAllSauce);



module.exports = router;