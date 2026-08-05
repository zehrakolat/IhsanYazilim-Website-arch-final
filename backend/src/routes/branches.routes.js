const router = require('express').Router();
const { getBranches } = require('../controllers/branchesController');

router.get('/', getBranches);

module.exports = router;
