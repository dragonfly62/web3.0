const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const {interface, bytecode} = require ('./compile.js');

const provider = new HDWalletProvider(
    'gun surface uncover minor match cereal maid cruel bamboo shove panic reform',
    'https://rinkeby.infura.io/v3/a9155809a3444022a0347b82f67c1e7c'
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

}

deploy();