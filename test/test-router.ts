import fs from "fs"
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
                              
const routeraddress = "0x8b8a0c55C6B4b0d4e3524cfCd690D6Bf1b072b98";
const tokenAaddress = "0x8F28888870Ce5bb580CA05CC49bdBCe0741B0212";
const tokenBaddress = "0x727dACc1F3017EC44A614Eb987663392DDE4ee4b";
const owner = "0x3E1ef36531f7e0D7bb4dD82C2559B784b57cb09E";
const PRIV_KEY = fs.readFileSync(".secret").toString()

const ABI = require("./routerabi.json"); //ABI\routerabi.json
const tokenaABI = require("./tokenAabi.json");
const tokenbABI = require("./tokenBabi.json");

const provider = new ethers.providers.JsonRpcProvider('https://testnet.era.zksync.dev');
const wallet = new ethers.Wallet(PRIV_KEY, provider);
const signer = wallet.connect(provider);
const contract = new ethers.Contract(routeraddress, ABI, signer);

const tokena = new ethers.Contract(tokenAaddress, tokenaABI, signer);
const tokenb = new ethers.Contract(tokenBaddress, tokenbABI, signer);

console.log('Router Contract Address :- ',contract.address);
let amountoutA, amountoutB, lptoken; 
export default async function(hre: HardhatRuntimeEnvironment) {
    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);
    let timestamp = block.timestamp;

    await tokena.approve(routeraddress, ethers.utils.parseEther('1000000'));
    await tokenb.approve(routeraddress, ethers.utils.parseEther('1000000'));

    const factory = await contract.factory();
    console.log("factory address :- ",factory);
    const WETH = await contract.WETH();
    console.log("WETH address :- ",WETH);

    amountoutA = await contract.addLiquidity(
        tokenAaddress,
        tokenBaddress,
        ethers.utils.parseEther('10'),
        ethers.utils.parseEther('10'),
        0,
        0,
        owner,
        timestamp + 300,
        { gasLimit: 1000000, }
    );
    // console.log('Amount A :- ',amountA);
    // console.log('Amount B :- ',amountB);
    console.log('Liquidity Added :- ',amountoutA);
    // function swapExactTokensForTokens(
    //     uint amountIn,
    //     uint amountOutMin,
    //     address[] calldata path,
    //     address to,
    //     uint deadline
    // ) external virtual override ensure(deadline) returns (uint[] memory amounts)
    
    // const swap = await contract.swapExactTokensForTokens(
    //     ethers.utils.parseEther('1'),
    //     0,
    //     [factory, WETH],
    //     owner,
    //     timestamp + 300,
    //     { gasLimit: 500000, }
    // );
    // console.log('Swap :- ',swap);
    // function getAmountsOut(uint amountIn, address[] memory path)
    //     public
    //     view
    //     virtual
    //     override
    //     returns (uint[] memory amounts)
    // [amountoutmin,amountoutmax] = await contract.getAmountsOut(
    //     ethers.utils.parseEther('1'),
    //     [factory, WETH]
    // );
    // console.log('Amount Out Min :- ',amountoutmin);
}                                          
                                                                                                               