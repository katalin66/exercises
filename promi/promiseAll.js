'use strict';

const cat = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      sound:"miau",
      loyal: false
    })
  }, 3000)
});

const dog = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      sound:"vau",
      loyal: true
    })
  }, 6000)
});
// Bármelyik Promise-nál hiba történik, a catch ágra fut
// ha mindegyik sikeresen fut le, akkor megy a then-re
Promise
  .all([cat, dog])
  .then((results) => { 
    const [cat, dog] = results;
    console.log(cat, dog)
  })
  .catch((error) => console.error(error))