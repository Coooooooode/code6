import postAbi from './Post.json'
import factoryAbi from './BlogFactory.json'

const contractAddress = '0x28Cf6C6a540864DaA392A125d9a233fA17BdC8e8'
const blogInstance = (web3Instance, address) => {
  return new web3Instance.eth.Contract(postAbi.abi, address)
}

const factoryInstance = web3Instance => {
  return new web3Instance.eth.Contract(factoryAbi.abi, address)
}

export { blogInstance, factoryInstance }
