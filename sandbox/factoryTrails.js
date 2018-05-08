/**
 * Created by schaud3 on 1/21/18.
 */
const wizardFacrory = require('../services/encrypt/wizard');
const wizard  = wizardFacrory.brew("secret");
const encryptedmsg = wizard.encrypt("secret");
console.log(encryptedmsg);
const msg = wizard.decrypt(encryptedmsg);
console.log(msg);