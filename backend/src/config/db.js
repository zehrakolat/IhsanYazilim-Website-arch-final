// DB bağlantısı burada kurulur (örn. Prisma/TypeORM/pg Pool).
// Şimdilik placeholder — gerçek bağlantı eklenene kadar null döner.
const { databaseUrl } = require('./env');

let connection = null;

async function connectDb() {
  if (!databaseUrl) {
    console.warn('[db] DATABASE_URL tanımlı değil — DB bağlantısı atlandı (mock veriyle çalışılıyor).');
    return null;
  }
  // TODO: gerçek bağlantı, örn:
  // const { Pool } = require('pg');
  // connection = new Pool({ connectionString: databaseUrl });
  return connection;
}

function getDb() {
  return connection;
}

module.exports = { connectDb, getDb };
