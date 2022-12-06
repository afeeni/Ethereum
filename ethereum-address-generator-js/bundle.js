(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Add imports here


// Add functions here


/*

Do not edit code below this line.

*/

var mnemonicVue = new Vue({
    el:"#app",
    data: {  
        mnemonic: "",
        privKey: "",
        pubKey: "",
        ETHaddress: "",
        sampleLegacyTransaction: {
            nonce: '0x00',
            gasPrice: '0x09184e72a000', 
            gasLimit: '0x2710',
            to: '0x31c1c0fec59ceb9cbe6ec474c31c1dc5b66555b6', 
            value: '0x10', 
            data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
            chainId: 3
        },
        sampleEIP1559Transaction: {
            nonce: '0x00',
            type: 2,
            maxPriorityFeePerGas: '0x09184e72a000',
            maxFeePerGas: '0x09184e72a000',
            gasLimit: '0x2710',
            to: '0x31c1c0fec59ceb9cbe6ec474c31c1dc5b66555b6', 
            value: '0x10', 
            data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
            chainId: 3
        },
        signedLegacySample: {},
        signedEIP1559Sample: {},
        recoveredLegacyAddress: "",
        recoveredEIP1559Address: ""
    },
    methods:{
        getHex: function(val){
            return bigIntToHex(val);
        },
        generateNew: function(){
            this.mnemonic = generateMnemonic()
        },
        signSampleLegacyTx: function(){
            this.signedLegacySample = signLegacyTx(this.privKey, this.sampleLegacyTransaction);
        },
        signSampleEIP1559Tx: function(){
            this.signedEIP1559Sample = signEIP1559Tx(this.privKey, this.sampleEIP1559Transaction);
        }
    },
    watch: {
        mnemonic: function(val){
            this.privKey = generatePrivKey(val)
        },
        privKey: function(val){
            this.pubKey = derivePubKey(val)
        },
        pubKey: function(val){
            this.ETHaddress = deriveEthAddress(val)
            this.recoveredAddress = ""
        },
        signedLegacySample: function(val){
            this.recoveredLegacyAddress = getSignerAddress(val)
        },
        signedEIP1559Sample: function(val){
            this.recoveredEIP1559Address = getSignerAddress(val)
        }
    }
})

},{}]},{},[1]);
