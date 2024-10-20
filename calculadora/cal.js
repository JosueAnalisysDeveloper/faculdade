const prompt = require('prompt-sync')()


    var continuar = false;


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


        var resposta = "VOCÊ DESEJA CONTINUAR ?? (S/N)".toLowerCase;

        if (resposta !== s){

            continuar = false;

                console.log ("Obrigado por usar o meu sistema de calculadora, ATE A PROXIMA!!!")
        }

    }