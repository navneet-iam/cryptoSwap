/* eslint-disable no-unused-vars */
import {Contract, ethers} from "ethers";
import stakingABI from "../ABI/stakingABI.json";
import stakeTokenABI from "../ABI/stakeTokenAbi.json";

export const connectWallet = async()=>{
    try{
       let [signer,provider,stakingContract,stakeTokenContract,chainId]=[null,null,null,null,null];
       if(window.ethereum===null){
          throw new Error("Metamsk is not installed");
       }
       const accounts = await window.ethereum.request({
        method:'eth_requestAccounts'
       })

       let chainIdHex= await window.ethereum.request({
        method:'eth_chainId'
       })
       chainId= parseInt(chainIdHex,16)
       
       let selectedAccount =accounts[0];
       if(!selectedAccount){
        throw new Error("No ethereum accounts available")
       } 

       provider = new ethers.BrowserProvider(window.ethereum);
       signer = await provider.getSigner();

       const stakingContractAddress = "0x46bb2d005D36116a93BeA03105e393D5988c889C";
       const stakingTokenAddress = "0x7a0080Cca59117A8aeF470376a5fF84Bdac1517f";

       stakingContract= new Contract(stakingContractAddress,stakingABI,signer);
       stakeTokenContract=new Contract(stakingTokenAddress,stakeTokenABI,signer);

       return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId}

    }catch(error){
        console.error(error);
        throw error
    }
    
}