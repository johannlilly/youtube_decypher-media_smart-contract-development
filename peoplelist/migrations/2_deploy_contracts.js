var People = artifacts.require("../contracts/People.sol");

module.exports = function(deployer) {
	deployer.deploy(People);
}