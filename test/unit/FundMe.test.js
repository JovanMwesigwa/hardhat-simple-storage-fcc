const { deployments, getNamedAccounts, ethers } = require('hardhat')
const { assert } = require('chai')

describe('FundMe', function () {
  let fundMe, deployer, aggregatorV3Mock

  beforeEach(async function () {
    // deploy contract
    deployer = await getNamedAccounts().deployer
    await deployments.fixture(['all'])
    fundMe = await ethers.getContract('FundMe', deployer)
    aggregatorV3Mock = await ethers.getContract('MockV3Aggregator', deployer)
  })

  describe('constructor', async function () {
    it('Should set the constructor addresses correctly', async function () {
      const priceFeedAddress = await deployer.getPriceFeedAddress()
      const owner = await deployer.getOwner()
      assert.equal(priceFeedAddress, aggregatorV3Mock.address)
      assert.equal(owner, deployer)
    })
  })
})
