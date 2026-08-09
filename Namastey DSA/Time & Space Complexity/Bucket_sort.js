let nums = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];

function bucketSort(nums){
    let buckets = Array.from({length:nums.length},()=>[]);
    
    for(let i=0; i<nums.length; i++){
        let idx = Math.floor(nums[i]*nums.length);
        buckets[idx].push(nums[i]);
    }
    buckets.forEach((bucket)=>{
        if(bucket.length) bucket.sort((a,b)=>a-b);
    })
    
    let i = 0;
    buckets.forEach((bucket)=>{
        bucket.forEach(ele=>{
            nums[i] = ele;
            i++;
        });
    })
}
bucketSort(nums);
console.log(nums)
