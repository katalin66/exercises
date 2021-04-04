function callback() {
  console.log('Ezt a függvényt gombnyomásra hajtja végre a program');
};

let button = document.querySelector('button');

button.onclick = callback;