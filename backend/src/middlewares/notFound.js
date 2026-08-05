module.exports = function notFound(req, res) {
  res.status(404).json({ error: true, message: 'Not found' });
};
