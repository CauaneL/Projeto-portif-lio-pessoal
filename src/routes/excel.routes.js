const express = require('express');
const router = express.Router();
const excelController = require('../controllers/excel.controller');
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware('admin'), upload.single('file'), excelController.upload);

module.exports = router;