// Controller'lardaki async hataları otomatik olarak error middleware'e iletir.
module.exports = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
