# Voting DApp Using Blockchain

Simple DApp that helps us conduct basic elections in afair manner using the blockchain technology. In early phases yet. 

### What Does It Do?

* Ensures that each voter is verified before casting the vote and votes only once.
* All voters need to be connected to the Ethereum blockchain.
* A transaction fee is levied as casting of the vote which itself marks the vote being casted.

### Tech Stack:
* Node Package Manager(NPM)
* Truffle Suite
* Ganache
* Metamask extension
* Web3.js

### Usage:
* Clone the repository
* Install truffle suite globally
    `npm install -g truffle`
* Traverse to the cloned directory and run following commands
     `truffle develop`
     `compile`
     `migrate`
     
* Install Metamask browser extension
* Install and run Ganache and configure it to the ganache blockchain, which talks to the metamask at
 `localhost:7545`
* Go to the home of the cloned directory and run:
 `npm run dev`

### Future Goals:
* Implementing it on a real blockchain.
* Implementing an user authentication.


### Resources
* http://solidity.readthedocs.io/en/develop/index.html
* https://github.com/trufflesuite/truffle-contract
* https://github.com/ethereum/wiki/wiki/JavaScript-API
* https://github.com/ethereum/wiki/wiki/Ethereum-introduction
