const prompt = require('prompt-sync')()


    var continuar = true;


    while(continuar){
var num = prompt("digite o primeiro numero : ")
var num2 = prompt ("digite o segundo numero : ")

    num = parseFloat (num)
    num2 = parseFloat (num2)

var operador = prompt("digite qual operador deseja -> | + , - , /, * | ")

    if (operador == "+"){
        console.log ( "RESULTADO DA OPERAÇAO = " + (num + num2))
    }
    else if (operador == "-"){
        console.log ( "RESULTADO DA OPERAÇAO = " + (num - num2))
    }
    else if (operador == "/"){
        console.log ( "RESULTADO DA OPERAÇAO = " + (num / num2))
    }
    else if (operador == "*"){
        console.log( "RESULTADO DA OPERAÇAO = " + (num * num2))
    }

    else{
        console.log ("erro no codigo!!!!!")
    }


    let resposta = prompt("VOCÊ DESEJA CONTINUAR ?? (S/N): ").toUpperCase().trim();

    // Validar a resposta
    while (resposta !== "S" && resposta !== "N") {
        console.log("Resposta inválida! Por favor, digite 'S' para sim ou 'N' para não.");
        resposta = prompt("VOCÊ DESEJA CONTINUAR ?? (S/N): ").toUpperCase().trim();
    }

    // Se a resposta for 'N', encerrar o programa
    if (resposta === "N") {
        continuar = false;
        console.log("Até a próxima!");
    }

    console.log(); // Adiciona uma linha em branco para separar as execuções
}