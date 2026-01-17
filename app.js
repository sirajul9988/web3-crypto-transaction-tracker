const config = require("./config");
const tracker = require("./tracker");
const saver = require("./saver");

async function startApp() {
  console.log("Web3 Crypto Transaction Tracker Started");

  const address = config.walletAddress;
  const data = await tracker.getTransactions(address);

  saver.saveTransactions(data);

  console.log("Wallet:", address);
  console.log("Total Transactions:", data.items.length);
}

startApp();
