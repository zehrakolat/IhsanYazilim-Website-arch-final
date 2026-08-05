const statsService = require('../services/statsService');
const asyncHandler = require('../utils/asyncHandler');

exports.getStats = asyncHandler(async (req, res) => {
  const stats = await statsService.getStats();
  res.json(stats);
});
