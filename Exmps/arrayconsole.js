const arregloBase = [1, 2, 6, 2, 3, 7, 7, 5, 7, 6, 2, 7, 10000000, 21];

// [7,2,6,1,3,5]
// {1: 1, 2: 3, 6: 2, ....}

let obj = {};
for (const el of arregloBase) {
  obj[el] = obj[el] + 1 || 1;
}

// for (const iterator of object) {

// }
// console.log(obj);
const sorted = Object.keys(obj).sort(function (a, b) {
  return obj[b] - obj[a];
});
console.log(sorted);
//for in

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//     for (const iterator of object) {
//     }
//   }
// }

//console.table(obj);
// console.error(obj);
// console.warn(obj);
// console.log(obj);
