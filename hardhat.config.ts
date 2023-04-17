import "@matterlabs/hardhat-zksync-toolbox";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.3.7",
    compilerSource: 'binary',
    settings: {
        isSystem: false, 
        optimizer: {
            enabled: true,
            mode: '3',
        },
        compilerPath: '',
        experimental: {},
    },
  },
  defaultNetwork: "zkTestnet",
  networks: {
    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: "goerli", // Can also be the RPC URL of the Ethereum network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
  },
  // solidity: {
  //   version: "0.8.17",
  // },
  solidity: {
    compilers: [
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },
      
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },

      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        },
      },

      // {
      //   version: "0.8.17",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 200
      //     }
      //   },
      // },
    ],
  },
};
