const findVowel= str=>{
    let count=0;
    const vowels=["a","e","i","o","u"]
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(str("ramya"))

// let obj={id:"1",name:"ramya",rollno:"20",tn:"thummala"};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// function rotateRight(arr, rotation){
//     if(rotation==0)  return arr;
       
   
//     for(let i=0;i<rotation;i++){
//         let element=arr.pop();
//         arr.unshitf(element)
//     }
//     return arr;
// }
// rotateRight([2,3,4,5,7],3)

// let a=0;
// let b=false;
// console.log(a==b);
// console.log(a===b);


// function runFunton(){
//     console.log("1"+1);
//     console.log("A"-1);
//     console.log(2+"-2"+"2");
//     console.log("hlo"-"world"+3);
//     console.log("hlo"+"34");
// }
// runFunton();

// let x={}, y={name:"ramya"}, z={name:"thummala"},r={name:"sony"}
// x[y]={name:"rajitha"};
// x[z]={name:"saa"}
// x[r]={name:"padkote"}
// console.log(x[z]);
// console.log(y);
// console.log(x[r]);

// (function(){
//     setTimeout(()=>console.log(1),2000);
//     console.log(2);
//     setTimeout(()=>console.log(3),0);
//     console.log(4);
// })
// ();

function outer(){
    var x=10;
    function inner(){
        console.log(x);
    }
    return inner;
}
var closureftn=outer();
closureftn();//closure concept