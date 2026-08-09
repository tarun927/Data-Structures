// fewer passes 3 as compared to 8 in another one
let dates = ['22101996','05061997','23101996'];

dates = countSort(dates,1000000,100,32);
dates = countSort(dates,10000,100,13);
dates = countSort(dates,1,10000,2501); 

function countSort(dates,div,rem, range){
  let freq = new Array(range).fill(0);
    for(let i=0; i<dates.length; i++){
        let parsed = parseInt(dates[i],10);
        let idx = Math.floor(parsed/div)%rem;
        freq[idx]++;
    }
    for(let i=1; i<freq.length; i++){
        freq[i] += freq[i-1];
    }
    let sorted = new Array(dates.length);
    for(let i=dates.length-1; i>=0; i--){
        let parsed = parseInt(dates[i],10);
        let idx = Math.floor(parsed/div)%rem;
        sorted[freq[idx]-1] = dates[i];
        freq[idx]--;
    }
    return sorted;
}
console.log(dates)
