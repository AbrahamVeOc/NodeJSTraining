let fruits = ["apple", "lemon", "pineapple"];
const pi = 3.1416;
const URL = "http://pokemon.com/find";
for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element, index);
  if (element === "apple") {
    console.log("es manzana!");
    console.log("si es manzana");
  }
  if (element === "pineapple") {
    for (let index = 0; index < 9; index++) {
      console.log("pineapple");
    }
  }
  if (element === "lemon") {
    console.log(" seguro es lemon");
  }
}
fruits = "pera";
console.log(fruits);
