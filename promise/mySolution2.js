"use strict";

var promise = new Promise(function (fulfill, reject) {
  setTimeout((resolve, reject) => {
    // Your solution here
    fulfill('FULFILLED!')
  }, 300);
});

// Your solution here
promise.then((data) => console.log(data));
