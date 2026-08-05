const branchesModel = require('../models/branchesModel');

module.exports = {
  async listBranches() {
    return branchesModel.findAll();
  },
};
