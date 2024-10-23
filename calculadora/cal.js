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

    
    while (resposta !== "S" && resposta !== "N") {
        console.log("Resposta inválida! Por favor, digite 'S' para sim ou 'N' para não."); // Validar a resposta
        resposta = prompt("VOCÊ DESEJA CONTINUAR ?? (S/N): ").toUpperCase().trim();
    }

    
    if (resposta === "N") {
        continuar = false;
        console.log("Até a próxima!");
    }

    console.log();
}