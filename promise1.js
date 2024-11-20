

//Using function promise
// function MyPromise(){
//     return new Promise((reject,resolve)=>{
//         var name="ramya"
//         if(name="ramya"){
//             resolve("this is true")
//         }
//         else{
//             reject("this is reject")
//         }
//     })
// };
// MyPromise().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });


//-------------usng variable-----------
const p=new Promise((resolve,reject)=>{
    if(false){
        resolve("This is true statements, Ramya")
    }
    else{
        reject("this is reject state");
    }
})
p
.then((respone)=>{
    console.log(respone)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("this is excute all finally")
})

//------------using all()method------------

// const Vr=new Promise(function(resolve,reject){
//     if(false){
//         resolve("vikram is gud");
//     }
//     else{
//         reject("he is bad")
//     }
// });
// const Rv=new Promise((reject,resolve)=>{
//     if(true){
//         reject("ramya this bad");
//     }else{
//         resolve("ramya is gud")
//     }
// });
// Promise.all([Vr,Rv]).then((re)=>{
//     console.log(re)
// }).catch(function(errr){
//     console.log(errr)
// }).finally(()=>{
//     console.log("final output")
// })

//---------------using allsettled()---------
// const Vr=new Promise(function(resolve,reject){
//     if(false){
//         resolve("vikram is gud");
//     }
//     else{
//         reject("he is bad")
//     }
// });
// const Rv=new Promise((reject,resolve)=>{
//     if(true){
//         reject("ramya this bad");
//     }else{
//         resolve("ramya is gud")
//     }
// });
// Promise.allSettled([Vr,Rv]).then((re)=>{
//     console.log(re)
// }).catch(function(errr){
//     console.log(errr)
// }).finally(()=>{
//     console.log("final output")
// })
