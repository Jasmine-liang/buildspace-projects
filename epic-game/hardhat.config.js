require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'JSON_RPC_LINK',
      accounts: ['PRIVATE_KEY'],
    },

  },
};