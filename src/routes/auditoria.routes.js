const express = require('express');
const router = express.Router();
const auditoriaController = require('../controllers/auditoria.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/logs', authMiddleware('admin'), auditoriaController.getLogs);

module.exports = router;
