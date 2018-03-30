import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
// these can be added through input fields
var peopleContractABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"added","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}]
var peopleContractAddress = '0x7c04859ff79d872f3128545fd2a63d47fccb9265'

// ETHEREUM_CLIENT.eth.contract(peopleContractABI)
// ^^^ this creates a ContractFactory
// this is a constructor function that can create a contract from an address

// ETHEREUM_CLIENT.eth.contract(peopleContractABI).at(peopleContractAddress)
// ^^^ this is the actual contract object
// it is like truffle's People.deployed().then(function(instance){});
// this means you can now store it as an object
// this means you can call functions on it
// this includes functions created in Solidity for the contract

var peopleContract = ETHEREUM_CLIENT.eth.contract(peopleContractABI).at(peopleContractAddress);
console.log(peopleContract.getPeople())
console.log(peopleContract.getPeople())

class App extends Component {
  constructor(props{
    super(props)
    // store a javascript object that stores the state of your component
    // render() takes state as an argument, which tells the app how to render based on state
    // changing state automatically causes re-render to reflect the new state of the UI
    this.state = {
      firstNames: [],
      lastNames: [],
      ages: []
    }
  }
  componentWillMount() {
    console.log(ETHEREUM_CLIENT)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
