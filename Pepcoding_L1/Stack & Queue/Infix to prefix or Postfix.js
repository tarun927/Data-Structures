//// almost similar to infix evaluation

let s = "a*(b-c)/d+e";

let stackNum = [];
let stackOp = [];

let priority = {
    "+" : 0,
    "-" : 0,
    "*" : 1,
    "/" : 1
}

let makeCurrentPre = ()=>{
    let b = stackNum.pop();
    let a = stackNum.pop();
    let op = stackOp.pop();
    stackNum.push(op+a+b);
}

for(let i=0; i<s.length; i++){
    if(priority[s[i]] !== undefined){
        while(stackOp.length && priority[stackOp[stackOp.length-1]] >= priority[s[i]]){
            makeCurrentPre();
        }
        stackOp.push(s[i]);
    }else if(s[i] === "("){
        stackOp.push(s[i]);
    }else if(s[i] === ")"){
        while(stackOp[stackOp.length-1] !== "("){
            makeCurrentPre();
        }
        stackOp.pop();
    }else{
        stackNum.push(s[i]);
    }
}

while(stackOp.length){
            makeCurrentPre();
        }
        
console.log(stackNum)
