const express = require('express');
const router = express.Router();
const mensageriaController = require('../controllers/mensageria.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/send', authMiddleware, mensageriaController.send);

module.exports = router;