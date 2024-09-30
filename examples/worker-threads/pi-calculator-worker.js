import { parentPort } from 'worker_threads';

console.log("Starting the worker");

parentPort.addEventListener('message', (event) => {
  const pi = calculatePi(event.data.iterations);
  parentPort.postMessage(pi);
});

function calculatePi(iterations) {
  let pi = 0;
  for (let i = 0; i < iterations; i++) {
    const sign = (i % 2 === 0) ? 1 : -1;
    pi += sign / (2 * i + 1);
  }
  return pi * 4;
}