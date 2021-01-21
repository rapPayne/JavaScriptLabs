* Async JavaScript

The thing to keep in mind is that JavaScript is single-threaded. You can't 
start two or more processes and expect the OS's kernel to give them both
timeslices so that they run simultaneously. So the goal here is not
to put a CPU-intensive thing in the background like in other languages. The 
goal is to put processes that have other reasons to wait in the background,
things like disk reads, Ajax calls, and database reads.

To demo this, create a longRunningProcess() function that simply returns "Finished". Then run it between console.log('before') and console.log('after'). You'll see
  before
  finished
  after

Then create a runInBackground() function that returns a promise that runs 
your longRunningProcess. It should resolve() with the finished message.

Then change the longRunningProcess() call to runInBackground().then(console.log). Watch the message change to
  before
  after
  finished

If you want to simulate a long-running CPU-intensive thing, go
  const startTime = new Date().getTime();
  while (startTime + milliseconds > new Date().getTime()) {
    // Do nothing
  }
This churns the CPU. It will take the same amount of time to show "after"
because the CPU is occupied. Shows that Promises aren't all that.

Their real value is "Yo, let me get my stuff started waiting. I'll queue 
up my resolve() stuff once the disk or Internet tells me it's ready."


