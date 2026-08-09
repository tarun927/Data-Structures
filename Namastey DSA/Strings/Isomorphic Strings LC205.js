var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let map = {};
    let set = new Set();

    for(let i=0; i<s.length; i++){
        if((map[s[i]])){
            if(map[s[i]] !== t[i]) return false;
        }else if(set.has(t[i])){
            return false;
        }

        map[s[i]] = t[i];
        set.add(t[i]);
    }
    return true;
};
