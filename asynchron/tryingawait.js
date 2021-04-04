'use strict';
async function one() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 1);
  });
  const result = await promise;
  console.log(result) // ha a fgv-en belül szeretnék dolgozni az eredménnyel, vagy:
  return result
}
// one();
one().then(console.log);