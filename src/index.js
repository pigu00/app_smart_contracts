import React from 'react'
import ReactDOM  from 'react-dom'
import "bootstrap/dist/css/bootstratp.min.css"
import detectEthereumProvider from "@metamask/detect-provider"
import {Contract, ethers} from 'ethers'

class App extends React.Component{

    async getBlockchain(){
        let provider = await detectEthereumProvider
        if (provider){
          await provider.request( { method: 'eht_requestAccounts' } )
        provider = 
        }
        return null;

    }
    
}

ReactDOM.render(
    <App />
    document.getElementById('root')
)