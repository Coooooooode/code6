const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic ="chunk double token plunge fetch across real toe box review lesson sad";
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.16'
    }
  },
  networks: {
    loc_development_development: {
      network_id:"5777",
      port: 7545,
      host: "127.0.0.1"
    },
    inf_solidity_blog_app_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/6d5f676342d34495bdf97a5caa0c5ea8")
    }
  }
};
