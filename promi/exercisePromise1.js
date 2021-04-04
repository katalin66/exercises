function CheckIfAllAreString(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let allAreString = array.every((user) => typeof user === "string");
      if (allAreString) {
        resolve(array);
      } else {
        reject("Not all items in the array are strings!");
      }
    }, 0);
  });
}

CheckIfAllAreString(['dog', 'cat', 'mouse', 'parrot', 1, true])
  .then((array) => {
    array = array.map(item => item.toUpperCase());
    return array
  })
  .then((array) => console.log(array))
  .catch((error) => console.error(error))
