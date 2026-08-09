var maxFreqSum = function(s) {
    let freq = new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        let idx = s[i].charCodeAt(0)-'a'.charCodeAt(0);
        freq[idx]++;
    }
    let maxV = 0;
    let maxC = 0;
    for(let i=0; i<freq.length; i++){
        if(i===0 || i===4 || i===8 || i===14 || i===20){
            maxV = Math.max(maxV,freq[i]);
        }else{
            maxC = Math.max(maxC,freq[i]);
        }
    }
    return maxV+maxC;
};
