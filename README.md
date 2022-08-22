## 🛑 DEPRECATED in place of [DeFiFoFum/hardhat-template](https://github.com/DeFiFoFum/hardhat-template)
# Truffle Typescript Boilerplate
![tests](https://github.com/DeFiFoFum/truffle-typescript-template/actions/workflows/tests/badge.svg)

__NOTICE: For new projects the badge link above must be updated as per:__
`![tests](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/tests/badge.svg)`


Build Solidity smart contracts with truffle, openzeppelin and typescript support.

## Install 
Click "Use as Template" to create a repo on GitHub based on this repo. Otherwise:  
`git clone git@github.com:DeFiFoFum/truffle-typescript-template.git`   
  
`yarn install`

## Setup
Create a `.env` file based off of `.env.example` to deploy contracts to bsc mainnet/testnet and to verify deployed contracts.  

</br>

## Development
Start a local development blockchain by running the following command:  
`yarn ganache`  
  
Deploy contracts to the development blockchain:  
`yarn migrate:dev` 

## Compile
`yarn compile`

</br>

## Deploy 

### Mainnet
`yarn migrate:bsc [--reset]` // Use `--reset` to redeploy already deployed contracts   
`yarn verify:bsc`  

### Testnet
`yarn migrate:testnet [--reset]`  
`yarn verify:testnet`  
  
_* new contracts that are created must be added to the verification script in package.json by adding `&&` to the end with the new contract verification._


## Lint
Lint with `solhint`  
`yarn lint` / `yarn lint:fix`    

</br>

## Test
Tests are run with `@openzeppelin` test environment. This allows tests to be run independently of an external development blockchain.   

Test the project with `yarn test`   

Tests are using  
`@openzeppelin/test-helpers`  
`@openzeppelin/test-environment` 

</br>

### Solidity Doc Gen
`yarn gen:docs`
[solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) can be used in this repo to scrape [NatSpec](https://docs.soliditylang.org/en/latest/natspec-format.html) comments into markdown files for easy document generation.  

_This module uses the solc package to generate the documents. If the compiler is changed, ensure that the correct solc version is installed: `yarn add solc@0.8.7`_

</br>

### Solidity Coverage
[solidity-coverage](https://www.npmjs.com/package/solidity-coverage) is used in this repo to provide an output of the test coverage after running tests.

### Automated Tests
The OpenZeppelin test environment coupled with Github actions facilitates automated contract tests on pushes to GitHub! 

</br>

## Generate Types from Contracts
Use `typechain` to generate contract interfaces for UI integration.  
`yarn gen:types`  

## Contract Size 
Use the `truffle-contract-size` module to find the size of each contract in the `contracts/` directory with:  
`yarn size`  

