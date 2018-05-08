/**
 * Created by schaud3 on 1/21/18.
 */
const vaultFactory = require('../services/cradle/vault');

const model = {
    name:"teting",
    password:"password2",
    username:"shreejitn"
}

vaultFactory.factory("secret").addModel(model);
