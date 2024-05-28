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
const getPromise= ()=>{
    return new Promise((resolve,reject)=>{
        console.log("New Promise");
        // resolve("succes");
        reject("error");
    })
}

let promise = getPromise();
promise.then((res)=>{
    console.log("promise resolved successfully and .the executed",res);
});

promise.catch((err)=>{
    console.log("Website is under maintainance",err);
})

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

