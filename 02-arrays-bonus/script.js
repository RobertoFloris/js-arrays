const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// const reversedTeachers = teachers.reverse().join(", ");
const reversedTeachers = []

for(let i = teachers.length - 1; i >= 0; i--){
  reversedTeachers.push(teachers[i])
}

// console.log(reversedTeachers);
// console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++){
  if(teachers[i].length >= 5){
    longNames.push(teachers[i])
  }
}

// console.log(teachers);
// console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const indice = teachers.indexOf('Ed');

if (indice != -1) {
  teachers.splice(indice, 1);
}

// console.log(teachers);