console.log(isDuplicateBracket('((a+b))+(c+d)'));
console.log(isDuplicateBracket('((a+b)+(c+d))'));
console.log(isDuplicateBracket('(a+b)+((c+d))'));
console.log(isDuplicateBracket('(((a+b))+(c+d))'));

function isDuplicateBracket(s){
    let stack = [];
    for(let i=0; i<s.length; i++){
        let top = stack[stack.length-1];
        if(s[i] === ')'){
          if(top && top !== '('){
            while(stack[stack.length-1] !== '('){
                stack.pop();
            }
            stack.pop();
          }else if(top && top === '('){
            return true;
          }
        }else{
            stack.push(s[i]);
        }
    }
    return false;
}
