var isPalindrome = function(s) {
    let i = 0;
    let j = s.length-1;

    while(i<j){
        if((s[i].toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) || s[i].toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0)) && (s[i].toLowerCase().charCodeAt(0) < '0'.charCodeAt(0) || s[i].toLowerCase().charCodeAt(0) > '9'.charCodeAt(0))){
            i++;
        }else if((s[j].toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) || s[j].toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0)) && (s[j].toLowerCase().charCodeAt(0) < '0'.charCodeAt(0) || s[j].toLowerCase().charCodeAt(0) > '9'.charCodeAt(0))){
            j--;
        }else{
            if(s[i].toLowerCase() !== s[j].toLowerCase()){
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
};
