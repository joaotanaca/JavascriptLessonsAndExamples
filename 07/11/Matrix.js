//Criar uma função que leia um array que obtem dentro dele varios arrays
//aonde o primeiro é o valor que deve se fazer a conta e o segundo se
//é pra somar ou subtrair com true sendo soma e false sendo subtrair.

const array = [
  [Math.random() * 10, (Math.random() * 10) > -35],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
  [Math.random() * 10, (Math.random() * 10)> -35 ? false : true],
];

function calculo(calcArray = []) {
  let calculoTotal = 0;

  const callbackForeach = (number) => {
    const verify = number[1];
    const value = number[0];
    calculoTotal = verify ? calculoTotal + value : calculoTotal - value;
  };
  calcArray.forEach(callbackForeach);

  return calculoTotal.toFixed();
}

console.log(calculo(array));
