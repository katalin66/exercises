localStorage.setItem('userName', JSON.stringify({
  name:'John Doe'
}));
console.log(localStorage.getItem('userName'));
console.log(typeof localStorage.getItem('userName')); // string

console.log(JSON.parse(localStorage.getItem('userName')));
console.log(typeof JSON.parse(localStorage.getItem('userName'))); // object

console.log(localStorage.key(0)); // 0-tól kezdődik az indexelés

localStorage.setItem('userAge', '33');
console.log(localStorage.getItem('userAge'));
console.log(typeof Number(localStorage.getItem('userAge'))); 

console.log(localStorage.length);

localStorage.removeItem('userName'); //törlés, egy adott kulcsú elemet
localStorage.clear(); //mindent töröl

//session ugyanígy, de csak a lapfül bezáréásáig őrzi meg az adatokat


