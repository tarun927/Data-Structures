// 1st approach than modified into 2nd for better approach using map
function isBalancedString(s){
    let stack = [];
    let openings = new Set(['(','[','{']);
    let closings = new Set([')',']','}']);
    
    for(let i=0; i<s.length; i++){
        let top = stack[stack.length-1];
        if(closings.has(s[i])){
            if(!top) return false; //handling incomplete odd numbered pairs
            
            if(top === '(' && s[i] !== ')'
            || top === '[' && s[i] !== ']' 
            || top === '{' && s[i] !== '}'){
                return false;  // handling unmatched bracket pairs
            }else if(openings.has(top)){
                stack.pop();
            }
        }else if(openings.has(s[i]) || closings.has(s[i])){
            stack.push(s[i]);
        }
    }
    if(stack[stack.length-1]) return false;
    return true;
}

console.log(isBalancedString("[(a+b)+{(c+d)*(e/f)}]"));   // true
console.log(isBalancedString("[(a+b)+{(c+d)*(e/f)}"));    // false
console.log(isBalancedString("[(a+b)+{(c+d)*(e/f)}"));    // false
console.log(isBalancedString("((a+b)+{(c+d)*(e/f)}]"));   // false

//BETTER LC20
var isValid = function(s) {
    let stack = [];
    let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for(let i=0; i<s.length; i++){
        let top = stack[stack.length-1];
        if(map[s[i]]){
            if(!top) return false; //extra closings bracket handling
            if(map[s[i]] === top){  
                stack.pop();
            }else{
                return false; // brackets wrong pair handling
            }
        }else{
            stack.push(s[i]);
        }
    }
    if(stack.length) return false; //extra opening brackets handling
    return true;
};
