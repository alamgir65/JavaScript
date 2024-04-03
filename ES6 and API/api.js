fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));


const getData= new Promise((resolve, reject) => {
    return reject("no data available");
});
// console.log(getData);

getData.then((date)=> console.log(data)).catch((err) => console.log(err));
