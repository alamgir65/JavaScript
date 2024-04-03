const products=[
    {barnd: "nokia \n",price: 20000, quantity: 10, color: "green"},
    {barnd: "mi ",price: 20000, quantity: 10, color: "green"},
    {barnd: "vivo ",price: 20000, quantity: 10, color: "black"},
    {barnd: "apple ",price: 20000, quantity: 10, color: "green"},
    {barnd: "nokia ",price: 20000, quantity: 10, color: "red"},
    {barnd: "iphone ",price: 20000, quantity: 10, color: "green"},
    {barnd: "samsung ",price: 20000, quantity: 10, color: "orange"},
    {barnd: "samsung ",price: 20000, quantity: 10, color: "black"},
    {barnd: "redmi ",price: 20000, quantity: 10, color: "blue"},
];

const productContainer = document.getElementById("product-container");

const result = products.forEach(product => {
    console.log(product);
    const name = product.barnd;
    const h1=document.createElement("h1");
    h1.innerText = name;
    productContainer.appendChild(h1);
});