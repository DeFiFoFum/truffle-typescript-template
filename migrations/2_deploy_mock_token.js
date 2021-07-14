const MockToken = artifacts.require("MockToken");

module.exports = function (deployer) {
  deployer.deploy(MockToken);
};
