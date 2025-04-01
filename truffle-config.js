module.exports = {
  networks: {
    development: {  // Change "ganache" to "development"
      host: "127.0.0.1",
      port: 7545,  // Ensure this matches Ganache's port
      network_id: "*", // Match any network
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",
    },
  },
};
