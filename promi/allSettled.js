'use strict';

const cat = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      sound:"miau",
      loyal: false
    })
  }, 3000)
});

const dog = new Promise((resolve,reject) => {
    reject('Promise error')
});
// ha mindegyik Promise lefutott a then ágra fogunk futni
// mindegy, hogy fulllfilled vagy rejectid lesz az állapot
Promise
  .allSettled([cat, dog])
  .then((results) => { 
    const [cat, dog] = results;
    console.log(cat, dog)
  })
  .catch((error) => console.error(error))