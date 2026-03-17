async function findElement(locator) {
  return new Promise((resolve, rejected) => {
    if (locator == "valid-locator") {
      resolve("Element is found");
    } else {
      rejected("Element not found");
    }
  });
}

async function clickElement(locator) {
  findElement(locator)
    .then((result) => {
      console.log(result);
      console.log("Element clicked");
    })
    .catch((error) => {
      console.log(error);
      console.log("Unable to click element");
    });
}

console.log("=======================================");
//await can only be used inside an async function
async function test() {
  await clickElement("valid-locator");
}
