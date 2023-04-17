import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
                              
const address = "0x8F28888870Ce5bb580CA05CC49bdBCe0741B0212";
const ABI = require("./tokenAabi.json"); //ABI\tokenAabi.json
const provider = new ethers.providers.JsonRpcProvider('https://testnet.era.zksync.dev');
const contract = new ethers.Contract(address, ABI, provider);
export default async function(hre: HardhatRuntimeEnvironment) {
  console.log(await contract.owner());
  console.log('TOTAL SUPPLY AFTER MINTING :- ',await contract.totalSupply());
} 
                                                          