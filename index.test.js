const { spinner } = require('./index');

let counts = [0,0,0,0,0]
const a = () => counts[0]++;
const b = () => counts[1]++;
const c = () => counts[2]++;
const d = () => counts[3]++;
const e = () => counts[4]++;

let callbacks = [a, b, c, d, e];

for (let i=0; i<1000; i++) {
  spinner(callbacks);
}
console.log(counts)
