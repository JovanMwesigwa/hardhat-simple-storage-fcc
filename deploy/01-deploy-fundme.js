const { network } = require('hardhat')
const { networkConfig, developmentChains } = require('../helper-hardhat-config')

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments
  const { deployer } = await getNamedAccounts()
  const chainID = network.config.chainId

  // const ethUsdAddress = networkConfig[chainID]['ethUsdAddress']
  let ethUsdAddress
  if (developmentChains.includes(network.name)) {
    const ethUsd = await get('MockV3Aggregator')
    ethUsdAddress = ethUsd.address
  } else {
    ethUsdAddress = networkConfig[chainID]['ethUsdAddress']
  }

  //   deploy fundMe
  await deploy('FundMe', {
    from: deployer,
    args: [ethUsdAddress],
    log: true,
  })
  log('----------------------------------')
}
