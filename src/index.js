import React from 'react'
import ReactDOM  from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import detectEthereumProvider from "@metamask/detect-provider"
import {Contract, ethers} from 'ethers'
import myContractManifest from './contracs/MyContract.json'

class App extends React.Component{

    constructor(props){
        super(props);
        this.initToAsync();
    }

    async initToAsync(){
        var myContract = await this.getBlockchain();
        var data = await myContract.;
    }

    async getBlockchain(){

        let provider = await detectEthereumProvider()

        if (provider){
          await provider.request( { method: 'eht_requestAccounts' } )
        provider = new ethers.providers.Web3Provider(provider);
        const signer = provider.getSigner()

            const myContract = new Contract(
                myContractManifest.networks[97].address,
                myContractManifest.abi,
                signer

            )
            return myContract;

        }

        return null;


    }
    
}

ReactDOM.render(
    <App />
    document.getElementById('root')
)