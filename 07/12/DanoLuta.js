//Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque.
//Faça uma função que receba 2 parâmetros, DANO e SAUDE. A função deve retornar verdadeiro se o dano
// for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e falso caso contrário.

const jogoLuta = (dano, saude) => saude <= dano;
console.log(jogoLuta(8, 9));
