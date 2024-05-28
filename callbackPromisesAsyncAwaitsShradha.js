// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,cb){
//     cb(a,b);
// }

// calculator(2,3,sum);

// CallBack Hell ki jaankaari yaha se suru hue hai
// function getData(data,getNextData){
//     setTimeout(()=>{
//         console.log('data ',data);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

// getData(1);
// getData(2);
// getData(3);

// getData ke ander hum 3 or getData function ko pass kar rahe id 2,3,4 ke liye taaki wo difine time delay ke baad print ho

// CallBack Hell
// getData(1,()=>{
//     console.log('Getting Data 2...');
//     getData(2,()=>{
//         console.log('Getting Data 3...');
//         getData(3,()=>{
//             console.log('Getting Data 4...');
//             getData(4)
//         })
//     })
// })

// Yaha se Promises padhna suru kiye hai
// const getPromise= ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("New Promise");
//         // resolve("succes");
//         reject("error");
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise resolved successfully and .the executed",res);
// });

// promise.catch((err)=>{
//     console.log("Website is under maintainance",err);
// })

// function getData(data,getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data ", data);
//         resolve('success');
//         if (getNextData) {
//           getNextData();
//         }
//       }, 8000);
//   });
// }


// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//             resolve("Success");
//         }, 3000)
//     },)
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//             resolve("Success");
//         }, 3000)
//     },)
// }

// console.log('Fetching DATA 1');
// let p1 = asyncFunc();

// // this is promise chainig.
// p1.then((res)=>{
//     console.log(res);
//     console.log('Fetching DATA 2');
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     })
    
// })

// function getData(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           console.log("data ", data);
//           resolve('success');
//         }, 4000);
//     });
// }

// uss complex se dikhne wale callback hell ko iss simple se promise chaining se replace kar sakte hai
// ye bhi likhne ka tarika hai par ek or tarika hai niche
// console.log('Fetching DATA 1');
// getData().then((res)=>{
//     console.log(res);
//     console.log('Fetching DATA 2');
//     getData().then((res)=>{
//         console.log(res);
//     })
    
// })

// console.log('Fetching DATA 1');
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res)
// })

// Async and Await 
// async functions automatically returns promis 

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data")
//             resolve(200)
//         },4000)
//     })
// }

// async function getWeatherReport(){
//     await api();
//     console.log("Getting 2nd Weather Data...")
//     await api();
// }
// getWeatherReport();


function getData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("data ", data);
          resolve('success');
        }, 4000);
    });
}
// Same getData wala example ko async awaits se kar rahe hai isse kaafi simple code se ho gaya
// async function data(){
//     console.log("Fetching Data 1")
//     await getData(1);
//     console.log("Fetching Data 2")
//     await getData(2);
//     console.log("Fetching Data 3")
//     await getData(3);
// }
// data();

// IIFE iss type ke function ko call karne ki jarurat nahi padti hai automatically evoke hota hai or Bas ek baar hi use ho sakta hai

(async function (){
    console.log("Fetching Data 1")
    await getData(1);
    console.log("Fetching Data 2")
    await getData(2);
    console.log("Fetching Data 3")
    await getData(3);
})();



