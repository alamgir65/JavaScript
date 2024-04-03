const nums=[37,561,18,13,452,14,4];
const [a,b,c,s]=nums;
// console.log(a,b,c,s);

// object destructuring

const obj={
    name:'Alamgir',
    age:23,
    city:'Dhaka',
    country: "Bangladesh",
    address: {
        street: "Nairobi",
        village: "char jabber",
        upazila: "subornachar"
    }
}
const {name,city,country}=obj;
// console.log(name,city);


// nested objects
const info=[{
    name:'Alamgir',
    age:23,
    city:'Dhaka',
    country: "Bangladesh",
    friends: ["shakib","hridoy",{
        uni: "NU"
    }]
},2,3,{},{}];

console.log(info[0].friends[2].uni);