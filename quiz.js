const readlineSync = require('readline-sync')

let quizz = [[`Question 1: Le C++ est un:
1: langage
2: compilateur`, '1'],
	     [`Question 2: TypeScript est une évolution de Javascript:
1: Vrai
2: Faux`, '1'],
	     [`Question 3: Lire les cours avant de faire les exercices est inutile:
1: Vrai
2: Faux`, '2'],
	     [`Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux`, '2'],
	     [`Question 5: Ethereum est une blockchain publique:
1: Vrai
2: Faux`, '1']];


let goodAnswers = 0;
let choix = ['1', '2'];


for (let i = 0; i < quizz.length; i++){
    let index = readlineSync.keyInSelect(choix, quizz[i][0]);
    console.log(`index = ${index}`);
    if (choix[index] == quizz[i][1]) {
	goodAnswers++;
    }
}

console.log(goodAnswers);

