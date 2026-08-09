
var findKthLargest = function(nums, k) {
   return quickSelect(nums,0,nums.length-1,nums.length-k);
};

function quickSelect(a,lo,hi,kIdx){
    if(lo === hi) return a[lo];

    let pIdxArr = threeWayParti(a,lo,hi,a[hi]);
    if(pIdxArr[0] <= kIdx && pIdxArr[1] >= kIdx){
        return a[kIdx];
    }else if(pIdxArr[1] < kIdx){
       return quickSelect(a,pIdxArr[1]+1,hi,kIdx);
    }else{
       return quickSelect(a,lo,pIdxArr[0]-1,kIdx);
    }
}

function threeWayParti(a,lo,hi,piv){
   let i = lo;
   let j = lo;
   let k = hi;
   while(i<=k){
    if(a[i] < piv){
      [a[i],a[j]] = [a[j],a[i]];
      i++;
      j++;
    }else if(a[i] > piv){
        [a[i],a[k]] = [a[k],a[i]];
        k--;
    }else{
        i++;
    }
   }
   return [j,k]
}
