function calculo(numbersArray = [0]) {
  let calcArray = 0;
  numbersArray.forEach((number) => {
    calcArray += number;
  });
  return calcArray;
}

const numbersArray = [9, 10, 140, 30];

console.log(calculo(numbersArray));
