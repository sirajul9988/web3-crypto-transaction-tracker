const api = require("./api");

async function getTransactions(address) {
  const result = await api.fetchTransactions(address);
  return {
    wallet: address,
    items: result.items || []
  };
}

module.exports = {
  getTransactions
};
