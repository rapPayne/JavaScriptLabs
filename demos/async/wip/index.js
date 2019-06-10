const longRunningProcess = async () => {
  // const startTime = new Date().getTime();
  // while (startTime + 5000 > new Date().getTime()) {
  //   // Do nothing
  // }
  return "LRP is finished";
};

// As a promise function
const runItInBackground = () => {
  return new Promise((resolve, reject) => {
    const retval = longRunningProcess();
    resolve(retval);
  });
};

// As an async function
// const runItInBackground = async () => {
//   return await longRunningProcess();
// };

console.log('before');
// const output = longRunningProcess();
// console.log(output);
const p = runItInBackground();
p.then(data => console.log(data));
console.log('after');