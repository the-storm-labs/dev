const externalAddrs  = {
  // https://data.chain.link/polygon/mainnet/fiat/brl-usd
  CHAINLINK_BRLUSD_PROXY: "0xb90da3ff54c3ed09115abf6fba0ff4645586af2c", 
  // https://data.chain.link/polygon/mainnet/crypto-usd/eth-usd
  CHAINLINK_ETHUSD_PROXY: "0xf9680d99d6c9589e2a93a78a04a279e509205945", 
  // https://docs.tellor.io/tellor/integration/reference-page
  TELLOR_MASTER:"0x8cFc184c877154a8F9ffE0fe75649dbe5e2DBEbf",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  UNISWAP_V2_FACTORY: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  UNISWAP_V2_ROUTER02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  // 
  WETH_ERC20: "0x3ecf5c34a7c65632e68d2A8F92FE45BD5dE687F0",
}

const liquityAddrs = {
  GENERAL_SAFE:"0xCB05449F5844ADe9ab3dc9c4516303AF9946fffd", // to be passed to LQTYToken as the bounties/hackathons address
  LQTY_SAFE:"0xCB05449F5844ADe9ab3dc9c4516303AF9946fffd", // to be passed to LQTYToken as the LQTY multisig address
  DEPLOYER: "0xCB05449F5844ADe9ab3dc9c4516303AF9946fffd" // Mainnet REAL deployment address
}

// Beneficiaries for lockup contracts. 
const beneficiaries = {
  ACCOUNT_1: "0xCB05449F5844ADe9ab3dc9c4516303AF9946fffd",  
}

const OUTPUT_FILE = './mumbaiDeployment/mumbaiDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 25000000000 // 25 gwei
const TX_CONFIRMATIONS = 3 // for mainnet

const ETHERSCAN_BASE_URL = 'https://polygonscan.com/'

module.exports = {
  externalAddrs,
  liquityAddrs,
  beneficiaries,
  OUTPUT_FILE,
  waitFunction,
  GAS_PRICE,
  TX_CONFIRMATIONS,
  ETHERSCAN_BASE_URL,
};