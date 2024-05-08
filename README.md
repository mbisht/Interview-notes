const myPromise = new Promise((resolve, reject) => {
    // Asynchronous code goes here
    // If the operation succeeds, call resolve with a result
    // If the operation fails, call reject with an error
   })

   const resolvedPromise = Promise.resolve(42);
   resolvedPromise.then((result) => console.log(result)); // o/p: 42
   
   //
   const rejectedPrmoise = Promise.reject(new Error("Failed"));
   rejectedPrmoise.then((result) => console.log(error.message)); // o/p: Failed!
   // 
   const promise1 = Promise.resolve(1);
   const promise2 = Promise.resolve(2);
   Promise.all([promise1, promise2])
       .then((values) => console.log(values)); // o/p: [1, 2]

   const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
   const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));
   Promise.race([promise1, promise2])
       .then((value) => console.log(value)); // o/p: one 

**************
TSL
The TSL Technology Intelligence Platform is a knowledge sharing portal which brings together knowledge from various sources such as primary and secondary research info by TSL expert team, social listening and TSL user contributions
**************

