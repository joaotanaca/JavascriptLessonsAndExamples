function calcMoreLess(numbersArray = [], calcMore = true) {
  let calcArray = 0;
  numbersArray.forEach((number) => {
    if (calcMore === true) {
      calcArray += number;
    } else {
      calcArray -= number;
    }
  });
  return calcArray;
}
const numbersArray = [2, 4, 6, 8];

console.log(calcMoreLess(numbersArray, false));
