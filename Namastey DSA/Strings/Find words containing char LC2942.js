var findWordsContaining = function(words, x) {
    let a = [];
    let idx=0;
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(words[i][j] === x){
                a[idx] = i;
                idx++;
                break;
            }
        }
    }
    return a;
};
