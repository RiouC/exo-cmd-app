const readlineSync = require('readline-sync')

let quizz = [[`Question 1: Le C++ est un:
1: langage
2: compilateur
=>`, 'Vrai'],
	     [`Question 2: TypeScript est une évolution de Javascript:
=>`, 'Vrai'],
	     [`Question 3: Lire les cours avant de faire les exercices est inutile:
=>`, 'Faux'],
	     [`Question 4: react.js a été developpé par Google:
=>`, 'Faux'],
	     [`Question 5: Ethereum est une blockchain publique:
=>`, 'Vrai']];


let goodAnswers = 0;
let choix = ['Vrai', 'Faux'];


for (const [question, answer] of quizz){
    let index = readlineSync.keyInSelect(choix, question);
    if (choix[index] == answer) {
	goodAnswers++;
    }
}

console.log(goodAnswers);

