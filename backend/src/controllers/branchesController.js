const branchesService = require('../services/branchesService');
const asyncHandler = require('../utils/asyncHandler');

exports.getBranches = asyncHandler(async (req, res) => {
  const branches = await branchesService.listBranches();
  res.json(branches);
});
