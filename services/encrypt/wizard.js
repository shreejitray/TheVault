/**
 * Created by schaud3 on 1/21/18.
 * new comment
 */

const crypto = require('crypto');


class Wizard {

    constructor(key) {
        this.key = key;
    }

    encrypt(msg) {
        const cryptoKey = crypto.createCipher('aes-256-cbc',this.key);
        let encryptedMsg = cryptoKey.update(msg,'utf8','hex');
        encryptedMsg += cryptoKey.final('hex');
        return encryptedMsg;
    }
    decrypt(msg) {
        const cryptoKey = crypto.createDecipher('aes-256-cbc',this.key);
        let decryptedMsg = cryptoKey.update(msg,'hex','utf8');
        decryptedMsg += cryptoKey.final('utf-8');
        return decryptedMsg;
    }
}

var brew = function (key) {
    var object = new Wizard(key);
    return object;
}

module.exports =  {brew};