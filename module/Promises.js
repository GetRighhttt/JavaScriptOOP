/**
 * A promise in JS is code that takes some time to wait for a result. 
 * 
 * Promises are used for asynchronous programming.(not occurring at the same time.)
 * 
 * async programming is used when we want to free up the main thread in android to allow for 
 * computations to happen in the background. Whereas in JS, it's used to defer a job and await,
 * a response. We do this with coroutines in Android also.
 * 
 * Promises are used often when making an HTTP request to a server.
 * 
 * resolve = success; reject = failure
 */


// resolve set to 3 seconds, and reject set to 1. reject message should show.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data successfully back from the server...")
    }, 3000)

    setTimeout(() => {
        reject("failed to get data back from the server...")
    }, 1000)
})

/**
 * Now we actually use the promise, catch the error if there is one.
 * 
 * finally is used regardless if there is an error or not.
 * 
 * this is how we initiate a promise. 
 */
promise.then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log("complete...")
})

/**
 failed to get data back from the server...
complete...
 */