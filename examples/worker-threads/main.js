import { Worker } from 'worker_threads';

// How many times we loop in the worker. Remove zeroes to make it run
// faster. Add zeroes to make it run slower. On my machine at a 
// billion it takes 2.5 seconds. At 10 billion, it takes 15 minutes.
const iterations = 1_000_000_000;

// listens for a exit signal. Can be deleted. Demo of listener only. NBD.
process.on('exit', () => {
  console.log('Exit event fired');
});

// listen for signal to interrupt
process.on('SIGINT', () => {
  console.log('Interrupt received. Exiting the loop');
  process.exit(0);
});

// Runs the code in the file, starting the worker.
const worker = new Worker('./pi-calculator-worker.js');

// Creates a listener so that when the worker sends us back a message, we'll 
// respond. In our case, getting the message content and console.log()ging it.
worker.addListener('message', (pi) => {
  console.log("Pi is", pi);
});

// Sends a message to the worker. In our case, this invokes the function.
worker.postMessage({ iterations });

// Now, in the main body of the flow, start an endless loop that counts
// up starting with 1.
let i = 1;
while (true) {
  process.stdout.clearLine(); // Just puts the output on the same line.
  process.stdout.cursorTo(0);
  process.stdout.write(`${i++}, `);
  await new Promise(resolve => setTimeout(resolve, 1000));
}