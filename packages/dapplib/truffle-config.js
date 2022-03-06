require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike rival mad pupil install creek equal genius'; 
let testAccounts = [
"0x1f6b0fef3f1bf4e6c99a58e23299d700e7884eb77f46a9d6256fcccff439301f",
"0x3fad1c4e87c4353d307e5f71a5cdf77879b1f9922bdc1a58f9ac30b51124c670",
"0xc3689b2a1fcf0337a7dda123c1d672f6fb202d5ec7945cdbe935cdbae8bbac9d",
"0x829155bbc3909da56739ff7262e956387e05b8b12fcf86bd802496ac2508f258",
"0x49695cbbba896e7036756394a09fe1ca464631fbbaaf06b0b04d417acf2b2cab",
"0x494666d61ac677f0aadf72474025c6d2fe57992fae400020d374186841cc21bc",
"0x8fac3ba829884af827f5ae50fe9aaafebed0a2b8871aef10cf6c1271f00d5bd5",
"0xd9df3d03036173f59ad60f0a9e24061f330e53e7af313b9a87f79aed8e50b4b4",
"0x26a94101f39be46eefef710e4cf400b4ff87f201849081b8d2f2894799447108",
"0x3a638d50eb22efab047ec5d0e0beefb5302b7510f9841c8ddc0fd2a560816d9d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

