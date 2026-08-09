////// end to start approach

let a = [2,5,9,3,8,12,6,8,7];
let stack = [];
let ans = new Array(a.length).fill(-1);

for(let i=a.length-1; i>=0; i--){
    while(stack.length && a[i] >= stack[stack.length-1]){
        stack.pop();
    }
    if(stack.length) ans[i] = stack[stack.length-1];
    stack.push(a[i]);
}
console.log(ans)
