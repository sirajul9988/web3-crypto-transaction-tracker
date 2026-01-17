const fs = require("fs");

function saveTransactions(data) {
  fs.writeFileSync("data/transactions.json", JSON.stringify(data, null, 2));
}

module.exports = {
  saveTransactions
};
