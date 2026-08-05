const statsModel = require('../models/statsModel');

module.exports = {
  async getStats() {
    // İş mantığı / cache burada (örn. Redis'ten oku, yoksa DB'ye düş).
    return statsModel.find();
  },
};
