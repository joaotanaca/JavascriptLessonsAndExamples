//Escreva um programa que calcule e mostre a tabuada (até 10x)
// de um número qualquer, digitado pelo usuário.

function tabuada(numero) {
    //i vai rodar até o numero 10 no bloco for
    for (let i = 1; i <= 10; i++) {
        const numeroFinal = numero * i;
        console.log("9 x " + i + " = " + numeroFinal);
    }
}
tabuada(9);