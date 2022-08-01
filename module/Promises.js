/**
 * A promise is a proxy for a value not necessarily known when the promise is created. it allows
 * you to associate handlers with an asynchronous action's eventual sucess value or failure.
 *
 * Promises are used for asynchronous programming.(not occurring at the same time.)
 *
 * async programming is used to complete multiple tasks at one time, without them happening
 * in order. In some scenarios in programming, all of the tasks do not have to happen one
 * after the other, or synchronously. It's better often to run multiple tasks on separate threads,
 * or at separate times, and waiting for the job to return. It's better overall.
 *
 * In most scenarios, async programming is one of the most importatnt concepts to master.
 *
 * resolve = success; reject = failure
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data successfully back from the server...");
  }, 3000);

  setTimeout(() => {
    reject("failed to get data back from the server...");
  }, 1000);
});

/**
 * Now we actually use the promise, catch the error if there is one.
 *
 * finally is used regardless if there is an error or not.
 *
 * this is how we initiate a promise.
 */
promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("complete...");
  });

/**
 failed to get data back from the server...
complete...
 */

/**
 * 
 * Another example: 
 * 
 * promises are always either pending, failed, or success.
 * 
 * resolve changes status of promise from pending to fulfilled.
 * 
 * reject changes status of promise from pending to failed.
 */

// create an instance of a promise using resolve and reject
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successful.")
    }, 3000)

    setTimeout(() => {
        reject("Didn't go through chief....")
    }, 5000)
});

/**execute callback functions based on the status of the change.
 * 
 * then() and catch() are used as onfulfillment() and onfailure() method callbacks.
 * 
 * we can pass an argument to them and use another function if we want.
 * 
 **/

const onFulfillment = (result) => {
    console.log(result)
    console.log("Fulfilled.")
}
const onFailure = (error) => {
    console.log(error)
    console.log("Failed.") 
}

newPromise.then(onFulfillment)
newPromise.catch(onFailure)