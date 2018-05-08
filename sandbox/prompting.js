/**
 * Created by schaud3 on 1/21/18.
 */

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('guess> ');
// rl.prompt();
// rl.on('line', function(line) {
//     if (line === "right") rl.close();
//     rl.prompt();
// }).on('close',function(){
//     process.exit(0);
// });
var prompt = require('prompt-sync')();

var sync = prompt('enter input');
console.log(`value ${sync}`);