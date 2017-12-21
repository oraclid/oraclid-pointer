var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var OraclidPointer = artifacts.require("./OraclidPointer.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(OraclidPointer, Ownable);
  deployer.deploy(OraclidPointer);
};
