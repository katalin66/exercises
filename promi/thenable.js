"use strict";
const thenable = {
  age: 30,
  then(resolve, reject) {
    setTimeout(() => resolve(this.age * 2), 1000)
  }
};
// automatikusan meghívódik a thenable object then metódusa
Promise
  .resolve("Success")
  .then((result) => {
    console.log(result);
    return thenable
  })
  .then((value) => console.log(value))
