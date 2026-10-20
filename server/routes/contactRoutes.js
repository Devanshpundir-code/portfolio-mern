const express = require('express');
const router = express.Router();
const { submitContact, getAllMessages } = require('../controllers/contactController');

router.post('/', submitContact);
router.get('/messages', getAllMessages);

module.exports = router;
