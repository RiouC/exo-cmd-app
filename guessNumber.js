const readlineSync = require('readline-sync');
const chalk = require('chalk');

// check length
if (process.argv.length != 3) {
    console.log(`usage: node guessNumber.js secretNumber`)
    process.exit(1) // exit the program with code status 1
}

// Verifier que secretNumber peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

const secretNumber = Number(process.argv[2]);


let running = true;
while (running) {
    let nb = readlineSync.question('nb = ? :  ');

    // Verifier que nb peut être converti en nombre
    if (isNaN(nb)) {
	console.log(`Error: nb is not a number.`)
	process.exit(1)
    }
    nb = Number(nb);

    if (nb < secretNumber)
	console.log(chalk.red('Nombre trop petit'));
    else if (nb > secretNumber)
	console.log(chalk.red('Nombre trop grand'));
    else {
	console.log(chalk.green('Bravo!'));
	running = false;
    }
}

