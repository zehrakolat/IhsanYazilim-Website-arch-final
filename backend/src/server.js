const app = require('./app');
const { port } = require('./config/env');
const { connectDb } = require('./config/db');
const logger = require('./utils/logger');

(async () => {
  await connectDb();
  app.listen(port, () => logger.info(`İhsan API dinleniyor: http://localhost:${port}`));
})();
