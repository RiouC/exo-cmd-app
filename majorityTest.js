const readlineSync = require('readline-sync');

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

if (age < 18)
    console.log(`Désolé, ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter`);
else
    console.log(`${firstName} ${name}, vous êtes majeur, vous pouvez voter`);


