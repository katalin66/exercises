const dateNow = new Date();
console.log(dateNow);
const date1 = new Date('October 8, 2019 11:50:21');
console.log(date1);
const myBirthDay = new Date('1966-07-25T10:00:00');
console.log(myBirthDay);
const date3 = new Date(1966,07,25,10,00,00,255);
console.log(date3);

console.log(dateNow.toDateString());
console.log(dateNow.toTimeString());
// magyar formátumban írja ki:
console.log(dateNow.toLocaleDateString('hu'));
console.log(dateNow.toLocaleTimeString('hu'));

console.log(myBirthDay.getFullYear());
console.log(dateNow.getFullYear());
console.log(dateNow.getFullYear()-myBirthDay.getFullYear());
console.log(dateNow.getFullYear()-date3.getFullYear());
// Írj egy függvényt, aminek a visszatérési értéke
// az adott év 01.01. óta eltelt másodperceinek száma!
console.log(Date.now());
console.log(Date.now(2021-01-01));
let myDate = document.getElementById(mydate);
console.log(myDate);


