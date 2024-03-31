var friends = ["alamgir","shamim","shakib"];

// console.log(friends);

friends.push("Rifat");
// console.log(friends);

// friends.pop();
// console.log(friends);

friends.unshift("kuddus");
// console.log(friends);

// friends.shift();
// console.log(friends);

var sali = ["fayeza","sathi","mukta"].concat("Holud pakhi")
// console.log(friends);
// console.log(sali);

var neww = friends.concat(sali);
console.log(neww);

console.log(friends.reverse());

console.log(friends.slice(2,5));

console.log(friends.indexOf("alamgir"));
