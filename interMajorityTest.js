const readlineSync = require('readline-sync');


if (process.argv.length != 3) {
  console.log(`usage: node interMajoritytest.js age`)
  process.exit(1) // exit the program with code status 1
}

// Verifier que ageMajorite peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

const ageMajorite = Number(process.argv[2]);


let name = readlineSync.question('Name: ');
let firstName = readlineSync.question('Firstname: ');
let age = readlineSync.question('Age: ');

// Verifier que age peut être converti en nombre
if (isNaN(age)) {
    console.log(`Error: age is not a number.`)
    process.exit(1)
}
age = Number(age);

if (name.length < 1) {
    console.log(`Error: name bad length.`)
    process.exit(1)
}
if (firstName.length < 1) {
    console.log(`Error: firstName bad length.`)
    process.exit(1)
}


if (age < ageMajorite)
    console.log(`Désolé, ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter`);
else
    console.log(`${firstName} ${name}, vous êtes majeur, vous pouvez voter`);


