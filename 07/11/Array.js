const frutas = ["Maça", "Banana", "Tomate", "Mamão"];

// function mapaFrutas(array = []) {
//   let resposta = "Fruta não encontrada";
//   array.forEach((fruta = "") => {
//     resposta = fruta === "Tomate" && "Fruta encontrada";
//   });
//   return resposta;
// }

function mapaFrutas(array = []) {
  let resposta = array.includes("Tomate")
    ? "Fruta encontrada"
    : "Fruta não encontrada";
  return resposta;
}

console.log(mapaFrutas(frutas));
