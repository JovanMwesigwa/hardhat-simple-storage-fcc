const { network } = require('hardhat')
const {
  DECIMALS,
  INITIAL_PRICE,
  developmentChains,
} = require('../helper-hardhat-config')

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  if (developmentChains.includes(network.name)) {
    log('Local network detected................')
    log('Deploying mocks.......................')
    await deploy('MockV3Aggregator', {
      from: deployer,
      args: [DECIMALS, INITIAL_PRICE],
      log: true,
    })
    log('----------------------------------------')
  }
}

module.exports.tags = ['all', 'mocks']
