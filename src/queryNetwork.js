const fetch = require('../dependencies/fetch');

async function queryNetwork(url) {
  const response = await fetch(url);
  return response.json();
}

module.exports = queryNetwork;