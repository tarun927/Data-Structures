let nums = [170,45,75,90,802,24,2,66];

function radixSort(){
    let max = Math.max(...nums);
    // place -> ones - tens - hund ....
    for(let place=1; place<=max; place*=10){
        nums = countingSort(nums,place);
    }
}
radixSort();
console.log(nums)

function countingSort(nums,place){
    let freq = new Array(10).fill(0);
    for(let i=0; i<nums.length; i++){
        let dig = Math.floor(nums[i]/place)%10;
        freq[dig]++;
     }

    for(let i=1; i<freq.length; i++){
       freq[i] = freq[i]+freq[i-1];
    }

    let sortedArr = new Array(nums.length);
    for(let i=nums.length-1; i>=0; i--){
      let dig = Math.floor(nums[i]/place)%10;
      freq[dig]--;
      sortedArr[freq[dig]] = nums[i];
    }
    return sortedArr;
}
