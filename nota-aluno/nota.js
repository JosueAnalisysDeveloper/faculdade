const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

rl.question("qual seu nome ?" , (resposta) =>{
console.log (`ola  ${resposta} tudo bem?`)


    rl.close();
});

// const readline = require('readline');

// // Criando a interface readline para entrada e saída do terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Fazendo uma pergunta ao usuário
// rl.question("Qual é o seu nome? ", (resposta) => {
//   console.log(`Olá, ${resposta}! Prazer em conhecê-lo.`);
  
//   // Fechando a interface após a resposta
//   rl.close();
// });

