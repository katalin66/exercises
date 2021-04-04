"use strict";

const users = [
  {
    firstName: "Nagy",
    lastName: "Ilona",
    age: 55,
  },
  {
    firstName: "Kiss",
    lastName: "Béla",
    age: 66,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 44,
  },
];

function findUserByAge(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.age === value);
      if (user) {
        resolve(user);
      } else {
        reject("Data not found");
      }
    }, 0);
  });
}

findUserByAge(10)
  .then((user) => {
    user.firstName = user.firstName.toUpperCase();
    return user
  })
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
