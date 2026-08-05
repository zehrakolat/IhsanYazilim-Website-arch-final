const router = require('express').Router();
const { getCities } = require('../controllers/citiesController');

router.get('/', getCities);

module.exports = router;
