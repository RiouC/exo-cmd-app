
// check input
if (process.argv.length != 4) {
    console.log(`usage: node pyramid.js nbBase symbol`)
    process.exit(1) // exit the program with code status 1
}

// Verifier que le premier argument passé peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

const nbBase = Number(process.argv[2]);

if (process.argv[3].length !== 1) {
    console.log(`Error: ${process.argv[3]} is not of length 1.`)
    process.exit(1)
}
const symbol = process.argv[3];

const pyramid = (nbBase, symbol) => {
    let str = ''
    for (let i = 1; i <= nbBase; i++) {
	str += ' '.repeat(nbBase - i) + symbol.repeat(i * 2) + ' '.repeat(16 - i) + '\n';
    }
    return str.slice(0, -1);
}


console.log(pyramid(nbBase, symbol));

