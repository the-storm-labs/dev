const externalAddrs  = {
  // https://data.chain.link/arbitrum/mainnet/fiat/brl-usd
  CHAINLINK_BRLUSD_PROXY: "0x04b7384473a2adf1903e3a98acac5d62ba8c2702", 
  // https://data.chain.link/arbitrum/mainnet/crypto-usd/eth-usd
  CHAINLINK_ETHUSD_PROXY: "0x639fe6ab55c921f74e7fac1ee960c0b6293ba612", 
  // https://docs.tellor.io/tellor/integration/reference-page
  TELLOR_MASTER:"0x8cFc184c877154a8F9ffE0fe75649dbe5e2DBEbf",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  UNISWAP_V2_FACTORY: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  UNISWAP_V2_ROUTER02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  // https://arbiscan.io/token/0x82af49447d8a07e3bd95bd0d56f35241523fbab1
  WETH_ERC20: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
}

const liquityAddrs = {
  GENERAL_SAFE:"", // to be passed to LQTYToken as the bounties/hackathons address
  LQTY_SAFE:"", // to be passed to LQTYToken as the LQTY multisig address
  DEPLOYER: "" // Mainnet REAL deployment address
}

// Beneficiaries for lockup contracts. 
const beneficiaries = {
  ACCOUNT_1: "",  
}

const OUTPUT_FILE = './mumbaiDeployment/mumbaiDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 25000000000 // 25 gwei
const TX_CONFIRMATIONS = 3 // for mainnet

const ETHERSCAN_BASE_URL = 'https://arbiscan.io/'

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