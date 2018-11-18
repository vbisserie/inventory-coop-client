'use strict';
const apiUrl = process.env.API_URL || "http://localhost:8000";

module.exports = {
  NODE_ENV: '"production"',
  apiBaseUrl: '"' + apiUrl + '/api/v1"',
};
