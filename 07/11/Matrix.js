//Criar uma função que leia um array que obtem dentro dele varios arrays
//aonde o primeiro é o valor que deve se fazer a conta e o segundo se
//é pra somar ou subtrair com true sendo soma e false sendo subtrair.

function calculo(calcArray = []) {
  let calculoTotal = 0;

  const callbackForeach = (number) => {
    const verify = number[1];
    const value = number[0];
    console.log(calculoTotal);
    calculoTotal = verify ? calculoTotal + value : calculoTotal - value;
  };

  calcArray.forEach(callbackForeach);

  return calculoTotal;
}

const array = [
  [4, true],
  [4, false],
  [4, true],
  [4, false],
  [4, true],
];

const ArrayValues = array.map((array) => array[0]);
const ArrayCondition = array.map((array) => array[1]);
console.log(ArrayValues, ArrayCondition);
