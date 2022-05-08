const { ethers } = require("ethers");
const path = require('path');
const fs = require('fs-extra');

const buildpath = path.resolve(__dirname); 

var output = "";

for (i = 0; i < 100; i++) {
    
    let wallet = ethers.Wallet.createRandom();
    let randomMnemonic = wallet.mnemonic;
    // {
    //     phrase: 'puppy race dose attitude average tube purchase auction rifle civil rally rival',
    //     path: "m/44'/60'/0'/0/0",
    //     locale: 'en'
    //   }
    // console.log(randomMnemonic.phrase);

    // var privateKey = wallet.privateKey;
    
    var address = wallet.address;
    
    if(output == ""){
        output = output + randomMnemonic.phrase + "," + address;
    }else{
        output = output + "\n" + randomMnemonic.phrase + "," + address;
    }

}


fs.outputFileSync(path.resolve(buildpath, 'mnemonic_address.csv'), output);




