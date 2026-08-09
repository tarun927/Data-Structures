/// define priority and operate equal and greater and equal priority first, handle closing bracket separately where solve till opening bracket occur. last remained number in Number stack will be the answer.
//// solving top operand multiple times consition based so separate their logic too

let exp = "2+(4+5-3*6/2)";
let stackNum = [];
let stackOp = [];
let operation = {
    "*" : (a,b) => a*b,
    "/" : (a,b) => a/b,
    "-" : (a,b) => a-b,
    "+" : (a,b) => a+b
}
let priority = {
    "*" : 1,
    "/" : 1,
    "-" : 0,
    "+" : 0
}
let operateTopOperand = ()=>{
    let b = stackNum.pop();
    let a = stackNum.pop();
    let op = stackOp.pop();
    stackNum.push(operation[op](Number(a),Number(b)));
}

for(let i=0; i<exp.length; i++){
    if(priority[exp[i]] !== undefined){
        while(stackOp.length && priority[stackOp[stackOp.length-1]] >= priority[exp[i]]){
            operateTopOperand();
        }
        stackOp.push(exp[i]);
    }else if(exp[i] === ")"){
        while(stackOp[stackOp.length-1] !== "("){
            operateTopOperand();
        }
        stackOp.pop();
    }else if(exp[i] === "("){
        stackOp.push(exp[i]);
    }else{
        stackNum.push(exp[i]);
    }
}
while(stackOp.length){
    operateTopOperand();
}
console.log(stackNum)
