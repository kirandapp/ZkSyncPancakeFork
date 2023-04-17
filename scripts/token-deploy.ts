import fs from "fs"
import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const PRIV_KEY = fs.readFileSync(".secret").toString()

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the "TOKEN A and TOKEN B" contract`);

  // Initialize the wallet.
    const wallet = new Wallet(PRIV_KEY);
    console.log("1");

  // Create deployer object and load the artifact of the contract we want to deploy.
    const deployer1 = new Deployer(hre, wallet);
    console.log("2");
    const artifact1 = await deployer1.loadArtifact("TokenA");
    console.log("3");
    const artifact2 = await deployer1.loadArtifact("TokenB");
    console.log("4");
    //const Contract = await deployer1.deploy(artifact, [300]);
    const ContractA = await deployer1.deploy(artifact1);
    console.log("5");
    const ContractB = await deployer1.deploy(artifact2);
    console.log("6");
    // console.log("constructor args:" + Contract.interface.encodeDeploy([300]));
    console.log("Constructor args: ",+ ContractB.interface.encodeDeploy());

  // Show the contract info.
    const contractAddressA = ContractA.address;
    const contractAddressB = ContractB.address;
    console.log("7");
    console.log(`${artifact1.contractName} was deployed to ${contractAddressA}`);
    console.log(`${artifact2.contractName} was deployed to ${contractAddressB}`);
    console.log("8");
  //Call the deployed contract.
//   const ownerOfContract = await Contract.owner();
//   console.log("Owner of the Contract :- ",ownerOfContract);
}