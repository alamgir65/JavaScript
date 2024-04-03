// let para="hello kiya hal he apka kase ho ap log?
// me thik ho"; its gives a error message 

let name='Alamgir kobra';
let kyu= `hello kiya hal he apka kase ho ap log?
 me thik ho , mera name ${name} me apka boss hota`;
// console.log(kyu);


let num = [47,571,4171,56,114,4,1,45,8,5,6];
// console.log(...num);

let newArray = ["alamgir","shakib",...num];

// console.log(...newArray);

// Find maximum number of array 
// console.log(Math.max(...num));
// console.log(Math.min(...num));
// console.log(Math.abs(...num));


// This is the part of array function zone 

const tmp=()=> "This function return one line without block";
console.log(tmp());

const fun=(a,b)=>{
    console.log("This console log is inside the function ");
    return a*b;
}

console.log(fun(3,4));