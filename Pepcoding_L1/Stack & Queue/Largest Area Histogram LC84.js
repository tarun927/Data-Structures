///// expand any ele to its left and right till the point it can expand to find that particular area max, till expanding point to left and right sides
///// are its next smaller ele to left and next smaller ele to right

let a = [6,2,5,4,5,1,6]
let stack = [];

let nstr = new Array(a.length).fill(a.length);
let nstl = new Array(a.length).fill(-1);

for(let i=0; i<a.length; i++){
    while(stack.length && a[stack[stack.length-1]] >= a[i]){
        stack.pop();
    }
    if(stack.length) nstl[i] = stack[stack.length-1];
    stack.push(i);
}
stack = [];
for(let i=a.length-1; i>=0; i--){
    while(stack.length && a[stack[stack.length-1]] >= a[i]){
        stack.pop();
    }
    if(stack.length) nstr[i] = stack[stack.length-1];
    stack.push(i);
}

let maxArea = 0;
for(let i=0; i<a.length; i++){
    let currArea = a[i]*((nstr[i]-1)-(nstl[i]+1)+1);
    if(currArea > maxArea) maxArea = currArea;
}
console.log(maxArea);
