var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let cnt=0;
    while(true){
        for(let i=0; i<strs.length-1; i++){
            if(cnt>=strs[i].length || strs[i][cnt] !== strs[i+1][cnt]){
               return strs[i].slice(0,cnt)
            }
        }
        cnt++;
    }
};
