let nums = [170,45,75,90,802,24,2,66];

function radixSort(){
    let div = 10;
    let max = Math.max(...nums);
    // div -> ones - tens - hund ....
    while(div<max*10){
      nums = countingSort(nums,div)
      div *= 10;
    }
}
radixSort();
console.log(nums)

function countingSort(nums,div){
    let freq = new Array(10).fill(0);
    for(let i=0; i<nums.length; i++){
        let dig = Math.floor((nums[i]%div)/(Math.floor(div/10)));
        freq[dig]++;
     }

    for(let i=1; i<freq.length; i++){
       freq[i] = freq[i]+freq[i-1];
    }

    let sortedArr = new Array(nums.length);
    for(let i=nums.length-1; i>=0; i--){
      let dig = Math.floor((nums[i]%div)/(Math.floor(div/10)));
      freq[dig]--;
      sortedArr[freq[dig]] = nums[i];
    }
    return sortedArr;
}
