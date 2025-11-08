const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crm.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/extract', authMiddleware(), crmController.extract);
router.post('/import', authMiddleware('admin'), crmController.import);

module.exports = router;