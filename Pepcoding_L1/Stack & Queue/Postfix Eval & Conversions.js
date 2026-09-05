//////In postfix exp order alrdy sorted so just take prev 2 of operator and perform operation, and in case of in or pre conversions just (a-b) and -ab

let exp = "264*8/+3-";

let operations = {
    "+": (a,b)=>a+b,
    "-": (a,b)=>a-b,
    "*": (a,b)=>a*b,
    "/": (a,b)=>a/b
}
let evalStack = [];
let inStack = [];
let preStack = [];

for(let i=0; i<exp.length; i++){
    if(operations[exp[i]] !== undefined){
        let b1 = evalStack.pop();
        let a1 = evalStack.pop();
        evalStack.push(operations[exp[i]](Number(a1),Number(b1)));
        
        let b2 = inStack.pop();
        let a2 = inStack.pop();
        inStack.push('('+a2+exp[i]+b2+')');
        
        let b3 = preStack.pop();
        let a3 = preStack.pop();
        preStack.push(exp[i]+a3+b3);
    }else{
        evalStack.push(exp[i]);
        inStack.push(exp[i]);
        preStack.push(exp[i]);
    }
}

console.log(evalStack, preStack, inStack)
