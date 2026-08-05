const logger = require('../utils/logger');

module.exports = function errorHandler(err, req, res, next) {
  logger.error(err.stack || err.message);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    error: true,
    message: status === 500 ? 'Sunucu hatası' : err.message,
  });
};
