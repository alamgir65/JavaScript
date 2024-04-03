const products=[
    {barnd: "nokia",price: 20000, quantity: 10, color: "green"},
    {barnd: "mi",price: 20000, quantity: 10, color: "green"},
    {barnd: "vivo",price: 20000, quantity: 10, color: "black"},
    {barnd: "apple",price: 20000, quantity: 10, color: "green"},
    {barnd: "nokia",price: 20000, quantity: 10, color: "red"},
    {barnd: "iphone",price: 20000, quantity: 10, color: "green"},
    {barnd: "samsung",price: 20000, quantity: 10, color: "orange"},
    {barnd: "samsung",price: 20000, quantity: 10, color: "black"},
    {barnd: "redmi",price: 20000, quantity: 10, color: "blue"},
];

const result= products.filter(product => (product.color == "green"));
// console.log(...result);


// uses of find 
const res = products.find(product => product.color == "green");
console.log(res);