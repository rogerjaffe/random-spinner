const { spinner } = require('./index');

let counts = [0,1,2,3,4];

for (i=0; i<20; i++) {
  console.log(spinner({outcomes: counts}));
}

console.log(spinner());
console.log(spinner({start: 4, end: 10, type: 'integer'}));
console.log(spinner({start: 4, end: 10, type: 'integer', overrideValue: 200}));
console.log(spinner({start: 4, end: 10, type: 'real'}));
