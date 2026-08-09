let nums = [-1,-5,-2,-1,4,2,5,3,3,2,1,4];

let min = nums[0];
let max = nums[0];
for(let i=0; i<nums.length; i++){
    if(nums[i]<min){
        min = nums[i];
    }
    if(nums[i]>max){
        max = nums[i];
    }
}

let freq = new Array(max-min+1).fill(0);
for(let i=0; i<nums.length; i++){
    freq[nums[i]-min]++;
}

let lastIdxMap = new Array(freq.length).fill(0);  //can use freq array too
lastIdxMap[0] = freq[0];
for(let i=1; i<freq.length; i++){
    lastIdxMap[i] = lastIdxMap[i-1]+freq[i];
}

let sortedArr = new Array(nums.length);
for(let i=nums.length-1; i>=0; i--){
    lastIdxMap[nums[i]-min]--;
    let idx = lastIdxMap[nums[i]-min];
    sortedArr[idx] = nums[i];
}
console.log(sortedArr);
