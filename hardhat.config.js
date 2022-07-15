require('@nomicfoundation/hardhat-toolbox')
require('hardhat-deploy')

require('dotenv').config()

const { RINKEBY_RPC_URL, PRIVATE_KEY } = process.env
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.8',
      },
      {
        version: '0.6.6',
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
}
