////// find next smaller to left and subtract current from it for span, 
////// remove smaller coz greater one can be next potential NGTR, update ans and push curr
  
  let a = [2,5,9,3,1,12,6,8,7];
 let stack = [];
 let stockSpan = [];
 
 for(let i=0; i<a.length; i++){
     while(stack.length && a[stack[stack.length-1]] <= a[i]){
         stack.pop();
     }
     if(stack.length){
         stockSpan[i] = i-stack[stack.length-1];
     }else{
         stockSpan[i] = i+1;
     }
     stack.push(i);
 }
 
 console.log(stockSpan);
