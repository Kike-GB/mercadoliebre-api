const express = require('express');
const router = express.Router();

const apiProductController = require('../controllers/apiProductController');

router.get('/latest', apiProductController.latest);

module.exports = router;