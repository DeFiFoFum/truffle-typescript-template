
const MockToken = artifacts.require("MockToken");
const { ether } = require('@openzeppelin/test-helpers');

module.exports = function (deployer) {
  deployer.deploy(MockToken, ether('1000'));
};
