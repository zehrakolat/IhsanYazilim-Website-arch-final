const router = require('express').Router();

router.use('/stats', require('./stats.routes'));
router.use('/reviews', require('./reviews.routes'));
router.use('/cities', require('./cities.routes'));
router.use('/branches', require('./branches.routes'));

module.exports = router;
