// accounts/review.routes.js
const express = require('express');
const router = express.Router();
const reviewController = require('./review.controller');

router.post('/', reviewController.create);

module.exports = router;
