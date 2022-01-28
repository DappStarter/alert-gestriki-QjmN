require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stool razor soccer mixture harvest forget equal genius'; 
let testAccounts = [
"0xa74b203504575df2895990a24c752ce918b3353200e57b553cc4dd9fc7904842",
"0x8f02ffd078786f3f8202d469dc205bd53fb04de33919e5c9fb11c17a48e75cc5",
"0x207daa2efcfcd1c1f80175eb6fcead52986ab73b66f5beab67d72b9b160f413b",
"0x60a83aea8e64b8a3e0206d9adb62eafcefb8aca5981d2d797a40a1dbff1bba24",
"0x3fd8f1dbc2c2adfa22c95cd23761f9b9cff8eb97b572ffe44f5c17aa636e3006",
"0xcca449aad4550c1456de3326d62a84f13ac71cb52d1b0aab1ca8f91466581c94",
"0x1a56fa70ea154667c251d9a0673aaf853718ab6706e4face128c2d71464cd59d",
"0x2a1ce1219b8416315e90bd89f9921e24dbbb15e26fedfe9f751e23f7193f2d43",
"0xaf9ae6d26720133c9face07d6826ddf048b970e86ed9baa1618bbc1ec5e68e51",
"0x0ee65c2c0d0fc5d7dd389c89e7cd69f81f44aa77c18fe72d72305a66d87a2727"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


