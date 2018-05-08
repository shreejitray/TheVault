/**
 * Created by schaud3 on 1/21/18.
 */
const wizardFactory = require('../encrypt/wizard');
const vault = require('../../resources/vault.json');
const file = require('fs');

class Vault {
    constructor(key) {
        this.wizard = wizardFactory.brew(key);
        const storedKey = this.wizard.decrypt(vault.key);
        if(storedKey === key) {
            this.keyCorrect = true;
        }
        this.itemAdded = false;
        this.vault = {models:{}};
    }
    openValut() {
        if(!this.keyCorrect){
            return;
        }
        const keys = Object.keys(vault.models);
        if(keys.length > 0 ) {
            for( let key in keys) {
                const uname = this.wizard.decrypt(vault.models[keys[key]].username);
                const password = this.wizard.decrypt(vault.models[keys[key]].password);
                this.vault.models[keys[key]]={
                    "username":uname,
                    "password":password
                }
            }
        }
    }
    addModel (model) {
        console.log(model);
        this.vault.models[model.name] = model;
        let username = this.wizard.encrypt(model.username);
        let password = this.wizard.encrypt(model.password);
        vault.models[model.name] = {
            "username":username,
            "password":password
        }
        file.writeFileSync("/Users/schaud3/Documents/personal/Vault/resources/vault.json",JSON.stringify(vault));
    }
    getModel(value) {
        return this.vault.models[value];
    }
}

const factory = function (key) {
    const object = new Vault(key);
    return object;
}

module.exports = {factory};