var numJewelsInStones = function(jewels, stones) {
    let jew = new Set();
    let ans = 0;
    for(let i=0; i<jewels.length; i++){
        jew.add(jewels[i]);
    }
    for(let i=0; i<stones.length; i++){
        if(jew.has(stones[i])) ans++;
    }
    return ans;

};
