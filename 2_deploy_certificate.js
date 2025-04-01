const Certificate = artifacts.require("Certificate");

module.exports = function (deployer) {
  deployer.deploy(Certificate).then(() => {
    console.log("Certificate contract deployed!");
  });
};
