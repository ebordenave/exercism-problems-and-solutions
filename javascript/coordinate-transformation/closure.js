// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// const makeAdder = (x) => {
//   return function (y) {
//     return x + y;
//   };
// };

// const add10 = makeAdder(10);
// console.log(add10(2));


const makeAdder = (x) => {
  return function (y) {
    return x + y
  }
}

const add20 = makeAdder(20);
console.log(add20(0))