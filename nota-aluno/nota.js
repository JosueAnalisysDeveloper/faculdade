const prompt = require('prompt-sync')();


// Fazendo uma pergunta ao usuário
var media = prompt('nota do primeiro bimestre ');
var media2 = prompt('nota do segundo bimestre ');
var media3 = prompt('nota do terceiro bimestre ');
var media4 = prompt('nota do quarto bimestre ');

    media =  parseFloat (media);
    media2 = parseFloat (media2);
    media3 = parseFloat (media3);
    media4 = parseFloat (media4);

    const resultado = (media + media2 + media3 + media4)/4;

console.log(` resultado do aluno no final do bimestre ${ resultado} !`);