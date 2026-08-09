// digit by digit , date->month->year
let dates = ['22101996','05061997','23101996'];

let pos = 1;
while(pos>=0){
    dates = countSort(dates,pos);
    pos--;
}
pos = 3;
while(pos>=2){
    dates = countSort(dates,pos);
    pos--;
}
pos = 7;
while(pos>=4){
    dates = countSort(dates,pos);
    pos--;
}

function countSort(dates,pos){
    let freq = new Array(10).fill(0);
    for(let i=0; i<dates.length; i++){
        let idx = Number(dates[i][pos]);
        freq[idx]++;
    }
    for(let i=1; i<freq.length; i++){
        freq[i] += freq[i-1];
    }
    let sorted = new Array(dates.length);
    for(let i=dates.length-1; i>=0; i--){
        let idx = Number(dates[i][pos]);
        sorted[freq[idx]-1] = dates[i];
        freq[idx]--;
    }
    return sorted;
}
console.log(dates)
