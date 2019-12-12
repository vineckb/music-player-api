const ProfileController = require('../controllers/Profile');
const express = require('express');

const router = express.Router();

router.get('/', ProfileController.get);
router.put('/', ProfileController.update);

module.exports = router;