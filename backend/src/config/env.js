require('dotenv').config();

const rawCors = process.env.CORS_ORIGIN;

module.exports = {
  port: process.env.PORT || 4000,
  corsOrigin: rawCors ? rawCors.split(',').map(s => s.trim()) : '*',
  databaseUrl: process.env.DATABASE_URL || null,
  redisUrl: process.env.REDIS_URL || null,
};
