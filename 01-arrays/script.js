const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
// console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";
// console.log(teachers[4])

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[6];
teachers.pop();
// console.log(teachers)
// console.log(lastTeacher)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.shift();
// console.log(teachers)
// console.log(firstTeacher)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
// console.log(teachers)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
// console.log(teachers)

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");

// let isFabioPresent = false;

// for (let i=0; i<teachers.length; i++){
//   if(teachers[i] == "Fabio"){
//     isFabioPresent = true;
//   }
// }

// console.log(isFabioPresent);
// console.log(teachers);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");

// let lewisIndex = 0;

// for (let i=0; i<teachers.length; i++){
//   if(teachers[i] == "Lewis"){
//     lewisIndex = i;
//   }
// }

// console.log(lewisIndex);
// console.log(teachers);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(",");
// console.log(teachersString)

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;

// let isTeachersEmpty = true;

// if(teachers.length > 0){
//   isTeachersEmpty = false;
// }

// console.log(isTeachersEmpty)

// 11. Per ogni insegnante stampa in console la frase
// [Nome insegnante] è l'insegnante in posizione [i]

for (let i=0; i<teachers.length; i++){
  console.log(`${teachers[i]} è l'insegnante in posizione ${i}`)
}