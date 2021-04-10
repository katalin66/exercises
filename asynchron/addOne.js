'use strict';

function addOneTo(number) {
  let result = number + 1;
  return new Promise((resolve, reject) => {
    resolve(result);
  });
}

async function main() {
  const res1 = await addOneTo(5);
  const res2 = await addOneTo(res1);
  const res3 = await addOneTo(res2);
  const res4 = await addOneTo(res3);
  const res5 = await addOneTo(res4);
  console.log(res5);
};

main();