

function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

const addTwo = makeAdder(2)

addTwo()