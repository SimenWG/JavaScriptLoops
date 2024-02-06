

/*
for (let i = 0; i <= 10; i = i + 3) {
    console.log(i);
}
*/

/*
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
*/

/*
let i = 0;
    while (i < 5) {
        break;
        console.log(i)
        i++;
    }

for (var i = 4; i < 8; i++) {
    if (i ===5) {
        continue;
    }
    console.log(i);
}
*/


/*
// OPPGAVE 1
for (let i = 1; i <= 50; i++ ) {
    console.log(i)
}
*/


/*
// OPPGAVE 2
for (let i = 2; i <= 50; i=i+2) {
    console.log (i);
}
*/

/*
// OPPGAVE 3
for (let i = 0 ; i <= 100; i = i + 15) {
    console.log (i) }
*/

/*
// OPPGAVE 4
for (let i = 0; i <= 100 ; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
*/

/*
// OPPGAVE 5
document.getElementById('userInput').addEventListener('input', () => {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = Array.from({ length: 6 }, (_, i) => `<h${i + 1}>${userInput}</h${i + 1}>`).join('');
});
*/

/*
// OPPGAVE 6
const length = 7;
const width = 14;
const outputDiv = document.getElementById('output');

for (let a = 0; a < length; a++) {
    let line = '';
    for (let b = 0; b < width; b++) {
        if (a === 0 || a === length - 1 || b === 0 || b === width - 1)
            line += '*';
        else
            line += '&nbsp&nbsp';
    }
    line += '<br>'; 
    outputDiv.innerHTML += line; 
}
*/


