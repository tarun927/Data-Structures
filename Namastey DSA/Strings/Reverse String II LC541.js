let reverse = function(a,i,j){
   while(i<j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;

    i++;
    j--;
   }
}
var reverseStr = function(s, k) {
    s = s.split("");
    for(let i=0; i<s.length; i+=2*k){
        let j = i+k-1;
        if(j<s.length){
           reverse(s,i,i+k-1);
        }else{
            reverse(s,i,s.length-1);
        }
    }
    return s.join("");
};
