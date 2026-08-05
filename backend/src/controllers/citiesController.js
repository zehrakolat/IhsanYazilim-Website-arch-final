const citiesService = require('../services/citiesService');
const asyncHandler = require('../utils/asyncHandler');

exports.getCities = asyncHandler(async (req, res) => {
  const cities = await citiesService.listCities();
  res.json(cities);
});
