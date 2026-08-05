const citiesModel = require('../models/citiesModel');

module.exports = {
  async listCities() {
    return citiesModel.findAll();
  },
};
