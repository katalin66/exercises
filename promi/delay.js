'use strict';
function delay(ms) {
  return new Promise((resolve, rejected) => {
    setTimeout(()=> {
      console.log(`${ms} timeout`);
      resolve(ms)
    }, ms)
  })
}

delay(1000)
  .then(ms => console.log('Result', ms))
