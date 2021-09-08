import { printMemory, getHistory } from './memory.js';
import { makeString, makeNotFlattenedString } from './strings.js';

function plot(data) {
  import('./plot.js').then(({ plot }) => plot(data));
}
const btn=sample4;
btn.onclick = run;

let a, b;

function run() {
  console.log('wait until you see a chart');
  btn.disabled = true;
  printMemory('baseline')
  .then(() => {
    a = makeString(10);
    return printMemory('a = makeString(10)');
  })
  .then(() => {
    b = a;
    return printMemory('b = a');
  })
  .then(() => {
    a=null;
    return printMemory('a=null');
  })
  .then(() => {
    b = null;
    return printMemory('b = null');
  })
  
     
    .then(() => {
      plot(getHistory());
    });
}

