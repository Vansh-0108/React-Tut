// // pehele BlueBird or Q use hote the
// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, cryprographic, network calls
//     setTimeout(() => {
//         resolve();
//         console.log("Async task completed");
//     }, 1000)
// });

// promiseOne.then(() => {
//     console.log("Promise Resolved");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task2 completed");
//         resolve();
//     }, 1000)
// }).then(() => {
//     console.log("Promise2 Resolved");
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({username: "hello", email: "hello@world.com"})
//     }, 1000);
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true;
//         if(!error)
//             resolve({username: "hello", email: "hello@world.com"});
//         else
//             reject('Error: Something went wrong');
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((err) => {
//     console.log(err);
// }).finally(() =>{
//     console.log("Finally Ended");
// })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true;
//         if(!error)
//             resolve({username: "JS", email: "js@world.com"});
//         else
//             reject('Error404');
//     }, 1000);
// })

// async function usePromiseFive () {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// usePromiseFive();

// async function getAllUsers() {
//     try {
//         const url = 'https://jsonplaceholder.typicode.com/users';
//         const response = await fetch(url);
//         // const data = JSON.parse(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error) => {
    console.log(error);
})
