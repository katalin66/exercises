"use strict";
const promises = [
  new Promise((resolve, reject) => setTimeout(resolve, 3000, "3000 HUF")),
  new Promise((resolve, reject) => setTimeout(resolve, 2000, "2000 HUF")),
  new Promise((resolve, reject) => setTimeout(resolve, 1000, "1000 HUF")),
  new Promise((resolve, reject) => setTimeout(resolve, 4000, "4000 HUF"))
];

  // Ahogy a legelső Promise fulllfilled lesz, le fog futni a then
Promise
  .race(promises)
  .then(console.log)
// Mindegyiknek teljesülnie kell, akkor fut le a then
  Promise
  .all(promises)
  .then(console.log)