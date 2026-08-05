const reviewsService = require('../services/reviewsService');
const asyncHandler = require('../utils/asyncHandler');

exports.getReviews = asyncHandler(async (req, res) => {
  const reviews = await reviewsService.listReviews();
  res.json(reviews);
});
