'use strict';

function elapsedSecondsFromBeginningOfTheYear(date) {
  let totalSeconds = 0;
  const elapsedSeconds = date.getSeconds();
  const elapsedMinutes = date.getMinutes();
  const elapsedHours = date.getHours();
  const elapsedDays = date.getDate();
  const elapsedMonth = date.getMonth();
  return totalSeconds +=
  ((((((elapsedMonth * 31 + elapsedDays) * 24) + elapsedHours) * 60) + elapsedMinutes) * 60) + elapsedSeconds;
}

const now = new Date();
const beginningOfTheYear = new Date('2021-01-01');
console.log(elapsedSecondsFromBeginningOfTheYear(now));

const monthIndex = now.getMonth();
const daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

let numberOfDays = now.getDate();
for (let i = 0; i < monthIndex; i++) {
  numberOfDays += daysPerMonth[i]
};

let numberOfWeeks = Math.floor(numberOfDays / 7);
let remainDays = numberOfDays % 7;
console.log(numberOfDays, numberOfWeeks, remainDays);

let silvester = new Date('2020-12-31');
let dayOfSilvester = silvester.getDay();
console.log(dayOfSilvester);