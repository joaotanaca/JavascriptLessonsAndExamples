const sortTwo = (array) => (array[0] > array[1] ? [array[1], array[0]] : array);
// sort([2, 1]);

// [2 , 1] = 2>1 aux = 2 [1,1] [1,aux] [1,2]

function sortThree(arrayNumbers = []) {
  let aux = 0;
  let filtedArray = arrayNumbers;
  console.log("Array original: ", arrayNumbers);
  for (let cont = 0; cont < arrayNumbers.length; cont++) {
    //Atribuindo o valor da posição i no array ao number : number se torna o valor da posição i do array
    const number = arrayNumbers[cont];
    console.log("Array original: ", arrayNumbers);

    console.log("-----------");

    for (let cont2 = cont + 1; cont2 < arrayNumbers.length; cont2++) {
      console.log("posição:", cont2);
      const number2 = arrayNumbers[cont2];
      console.log("value:", number2);
      console.log("-----------");

      if (number > number2) {
        //auxiliar guardando numero maior que o atual
        aux = number2;

        //numero da posiçao i2 no array se tornando numero verificado
        filtedArray[cont2] = number;

        //numero na posição i no array se tornado o auxiliar
        filtedArray[cont] = aux;
      }
    }
  }
  return filtedArray;
}

sortThree([2, 1, 10, 20, 4, 500]);
