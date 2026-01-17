async function fetchTransactions(address) {
  return {
    items: [
      { hash: "0xabc123", amount: 0.1 },
      { hash: "0xdef456", amount: 0.5 },
      { hash: "0xghi789", amount: 1.2 }
    ]
  };
}

module.exports = {
  fetchTransactions
};
