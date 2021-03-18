
if (process.argv.length != 3) {
  console.log(`usage: node sayHello.js name`)
  process.exit(1) // exit the program with code status 1
}
let name = process.argv[2];
console.log(`Hello, ${name}.`);
