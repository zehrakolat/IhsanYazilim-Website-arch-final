const express = require('express');
const cors = require('cors');
const { corsOrigin } = require('./config/env');
const routes = require('./routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

// API-SPEC.md: GET /website/stats, /reviews, /cities, /branches
app.use('/api/website', routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
