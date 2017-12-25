var HDWalletProvider = require("truffle-hdwallet-provider");

var fromAddr = process.env.TRUFFLE_FROM_ADDR;
var mnemonic = process.env.TRUFFLE_MNEMONIC;
var infuraKey = process.env.INFURA_KEY;

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infuraKey, 3);
      },
      //from: fromAddr,
      network_id: 3,
      gas: 3000000
    },
    test: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://localhost:8545/");
      },
      network_id: '*'
    }
  }
};
