/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* Arrow functions */

const antiguaFuncion = function antiguaFuncion() {
  // codigo
};

const es6Function = () => {
  // codigo
};

const es6Function2 = () => hacerAlgo(); // si es una línea

const es6Function3 = parametro => hacerAlgo(parametro);

/* Promises */

setTimeout(() => {
  console.log('I promised to run after 1s');
  setTimeout(() => {
    console.log('I promised to run after 2s');
  }, 1000);
}, 1000);

// with PROMISES you can rewrite the code above into:
const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

wait().then(() => {
  console.log('I promised to run after 1seg.');
  return wait();
})
  .then(() => console.log('I promised to run after 2seg'));


/* GENERATORS */

function* calculator(input) {
  const doubleThat = 2 * (yield (input / 2));
  const another = yield (doubleThat);
  return (input * doubleThat * another);
}

const calc = calculator(10);

console.log(calc.next()); // start the iterator on our generator
// input / 2 = 5

console.log(calc.next(7)); // 7 * 2 = 14

console.log(calc.next(100)); // 10 * 14 * 100