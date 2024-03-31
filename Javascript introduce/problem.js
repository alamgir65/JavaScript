var nums = [2,34,4,6,4,376435,35,51,2226,9];

console.log(nums.sort(function(a,b){
    return a-b;
}));

for (var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
        if(nums[j] < nums[i]){
            var tmp=nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        }
    }
}
console.log(nums);




// another way for sorting




let arr = [1, 2, 3, 4, 2, 3, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

