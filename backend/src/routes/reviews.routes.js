const router = require('express').Router();
const { getReviews } = require('../controllers/reviewsController');

router.get('/', getReviews);

module.exports = router;
