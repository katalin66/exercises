'use strict';

function resolve(value) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000, value * 2)
  })
}

async function serial() {
  const a = await resolve(1);
  const b = await resolve(2);
  return a + b;
}

async function parallel() {
  const promiseA = resolve(10);
  const promiseB = resolve(20);
  return await(promiseA) + await(promiseB);
}

async function executionTime(func) {
  const start = performance.now();
  await func();
  const end = performance.now();
  return end - start;
}

executionTime(serial).then(console.log).catch(console.log)

// serial().then(console.log);
// parallel().then(console.log);