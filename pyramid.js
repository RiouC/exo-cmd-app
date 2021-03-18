
const argvLength = process.argv.length;
// check argv length
if (argvLength < 4 && argvLength > 5) {
    console.log(`usage: node pyramid.js nbBase symbol [-r]`);
    process.exit(1) // exit the program with code status 1
}

// Verifier que le premier argument passé peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`);
    process.exit(1)
}
const nbBase = Number(process.argv[2]);

if (process.argv[3].length !== 1) {
    console.log(`Error: ${process.argv[3]} is not of length 1.`);
    process.exit(1)
}
const symbol = process.argv[3];

let reverse = false;

if (argvLength === 5) {
    if (process.argv[4] !== '-r') {
	console.log(`Error: ${process.argv[4]} not recognized by pyramid.`);
	process.exit(1)
    }
    else
	reverse = true;
}



const pyramid = (nbBase, reverse, symbol) => {
    let str = ''
    if (!reverse) {
	for (let i = 1; i <= nbBase; i++) {
	    str += ' '.repeat(nbBase - i) + symbol.repeat(i * 2) + ' '.repeat(nbBase - i) + '\n';
	}
    } else {
	for (let i = nbBase; i > 0; i--) {
	    str += ' '.repeat(nbBase - i) + symbol.repeat(i * 2) + ' '.repeat(nbBase - i) + '\n';
	}
    }
    return str.slice(0, -1);
}


console.log(pyramid(nbBase, reverse, symbol));

