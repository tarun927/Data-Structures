// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// gfg: https://www.geeksforgeeks.org/problems/all-distinct-pairs-with-given-sum/1


let a = [5,2,4,1,0,-1,3,2];

let sorted = mergeSort(a,0,a.length-1);
console.log(sorted)
console.log(findSumPair([1,1,1,2,2,3,3,4,4],5));
function findSumPair(a,tar){
    let i = 0;
    let j = a.length-1;
    let ans = [];
    while(i<j){
        if(ans.length && a[i] === ans[ans.length-1][0]){
            i++;
            continue;
        }
        let sum = a[i]+a[j];
        if(sum < tar){
            i++;
        }else if(sum > tar){
            j--;
        }else{
            ans.push([a[i],a[j]])
            i++;
            j--;
        }
    }
    return ans;
}

function mergeSort(arr,lo,hi){
    if(lo === hi) return [arr[lo]];
    let m = Math.floor((lo+hi)/2);
    let a1 = mergeSort(arr,lo,m);
    let a2 = mergeSort(arr,m+1,hi);
    return merge2Sorted(a1,a2);
}

function merge2Sorted(a1,a2){
    let merged = new Array(a1.length+a2.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while(i<a1.length && j<a2.length){
        if(a1[i] < a2[j]){
            merged[k] = a1[i];
            i++;
        }else{
            merged[k] = a2[j];
            j++;
        }
        k++;
    }
    while(i<a1.length){
        merged[k] =a1[i];
        i++;
        k++;
    }
    while(j<a2.length){
        merged[k] =a2[j];
        j++;
        k++;
    }
    return merged;
}
