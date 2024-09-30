# Workers

JavaScript is not multithreaded but its host may be. So while we
cannot spawn multiple threads, we can create an event listener 
responds and we can create a separate .js file that can run on 
a separate *host* thread.

## We use Workers to tap into multithreading 
They're weird in JavaScript:
- The separate thread is always in a separate physical file.
- Threads can only talk by sending messages thru the kernel
- 

Since they can only send messages thru the kernel, we must create
message listeners for each thread. When either one receives a 
message from the other, the callback associated with that message
runs. Here's an example:
```javascript
foo.addListener('messageType', () => { Thing to do });
```
Where:
- "foo" is the current context. Different in Node vs browser!
- "messageType" is a string. eg. "message", "SIGINT", "exit"

We also have to send me

In node, you have to import `worker_threads` which is built in
to node. On the web, there is no import because Worker is
part of the global object.

## To run this demo
```bash
npm run start
```
