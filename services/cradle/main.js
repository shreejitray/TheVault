/**
 * Created by schaud3 on 1/21/18.
 */
const vaultFactory = require('./vault');
const readline = require('readline');
var vault = undefined;
var prompt = require('prompt-sync')();

var key="";
while(true) {
    var input = prompt('>')
    switch(input.split(' ')[0].toLocaleLowerCase()) {
        case "open":
        case "open_vault":
            if(key.length > 0) {
                vault = vaultFactory.factory(key)
            }else {
                key=prompt('Please enter secret key:');
                vault = vaultFactory.factory(key)
            }
            vault.openValut();
            if(vault.keyCorrect){
                console.log('Vault is open');
            } else {
                Console.log("Incorrect Password");
                key="";
            }
            break;
        case "set_key":
            key = input.split(' ')[1];
            break;
        case "drawer":
            console.log('inside drawer');
            console.log(`fetching for ${input.split(' ')[1].toLocaleLowerCase()}`);
            if(vault === undefined) {
                console.log("Open vault with correct password");
            }
            const model = vault.getModel(input.split(' ')[1].toLocaleLowerCase());
            if(model === undefined) {
                if(!(vault && vault.keyCorrect)) {
                    console.log("Try setting the correct vault password and try again");
                } else {
                    console.log("The requested Item is not present in the vault, try adding the item");
                }
            } else {
                console.log(`User Name: ${model.username} \n Password: ${model.password}`);
            }
            break;
        case "add":
            if(vault === undefined || !vault.keyCorrect) {
                console.log("Open the vault with correct password");
                break;
            }
            let name = prompt("Enter model name:");
            let userName = prompt("Enter user name:");
            let password = prompt.hide("Enter Password:");
            vault.addModel({name:name,username:userName,password:password});
            break;

        case "exit":
        case "bye":
            process.exit(0);
            break;
        default:
            console.log("Incorrect command, try putting a correct command");

    }
}
