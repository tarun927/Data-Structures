//similar to find no. of times array is sorted/ aditya verma with correction

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length-1;
    while(lo<=hi){
        if(nums[lo] <= nums[hi]) return nums[lo];
        let m = Math.floor((lo+hi)/2);
        if((m-1>=0 ? nums[m-1]>nums[m] : true) && (m+1<nums.length ? nums[m+1]>nums[m] : true)){
            return nums[m];
        }else if(nums[lo] > nums[m]){
           hi = m-1;
        }else{
           lo = m+1;
        }
    }
};
