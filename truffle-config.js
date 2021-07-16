 require('babel-register');
 require('babel-polyfill');
 require('dotenv').config();
 const HDWalletProvider = require("truffle-hdwallet-provider");
 
 module.exports = {
   networks: {
     development: {
       host: "127.0.0.1",
       port: 7545,
       network_id: "*"
     },
     "ropsten-infura": {
       provider: () => new HDWalletProvider(mnemonic, infura, 0),
       network_id: 3,
       gas: 4700000,
       gasPrice: 100000000000
     }
   }
  };
 /*
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
*/