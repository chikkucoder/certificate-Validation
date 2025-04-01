require("dotenv").config();
const Web3 = require("web3");
const contractJSON = require("./build/contracts/Certificate.json");

// Connect to Ganache
const web3 = new Web3("http://127.0.0.1:7545");

// Get contract details
const contractAddress = "your_deployed_contract_address"; // Replace with actual address
const contractABI = contractJSON.abi;
const certificateContract = new web3.eth.Contract(contractABI, contractAddress);

// Issue a Certificate
async function issueCertificate() {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Using account:", accounts[0]);

    const tx = await certificateContract.methods
      .issueCertificate("Alice", "Blockchain Development", "QmXyz123...")
      .send({ from: accounts[0] });

    console.log("Certificate Issued! Tx Hash:", tx.transactionHash);
  } catch (error) {
    console.error("Error issuing certificate:", error);
  }
}

// Verify Certificate
async function verifyCertificate(certId) {
  try {
    const cert = await certificateContract.methods.verifyCertificate(certId).call();
    console.log(`Certificate Verified:\nStudent: ${cert.studentName}\nCourse: ${cert.course}\nIPFS Hash: ${cert.ipfsHash}`);
  } catch (error) {
    console.error("Error verifying certificate:", error);
  }
}

// Execute functions
(async () => {
  await issueCertificate();
  await verifyCertificate(1);
})();
