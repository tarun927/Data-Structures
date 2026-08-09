var balancedStringSplit = function(s) {
    let bal = 0;
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === 'R') bal++;
        if(s[i] === 'L') bal--;
        if(bal === 0){
            count++;
        }
    }
    return count;
};
