const reviewsModel = require('../models/reviewsModel');

module.exports = {
  async listReviews() {
    return reviewsModel.findAll();
  },
};
