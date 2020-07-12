const sortTwo = (array) => (array[0] > array[1] ? [array[1], array[0]] : array);
// sort([2, 1]);

// [2 , 1] = 2>1 aux = 2 [1,1] [1,aux] [1,2]

function sortThree(arrayNumbers = []) {
  let aux = 0;
  let filtedArray = arrayNumbers;

  for (let i = 0; i < arrayNumbers.length; i++) {
    const number = arrayNumbers[i];

    for (let i2 = i + 1; i2 < arrayNumbers.length; i2++) {
      const number2 = arrayNumbers[i2];

      if (number > number2) {
        //auxiliar guardando numero maior que o atual
        aux = number2;

        //numero da posiçao i2 no array se tornando numero verificado
        filtedArray[i2] = number;

        //numero na posição i no array se tornado o auxiliar
        filtedArray[i] = aux;
      }
    }
  }
  return filtedArray;
}
console.log(sortThree([2, 1, 10, 20, 4, 500]));
