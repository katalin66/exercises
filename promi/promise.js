
const samplePromise = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 11);
  let isOddRandomNumber = randomNumber % 2;
  setTimeout(() => {
    if (isOddRandomNumber) {
      resolve("Promise is fullfilled");
    } else {
      reject(new Error("Promise error"));
    }
  }, 1000);
});

samplePromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Settled"))