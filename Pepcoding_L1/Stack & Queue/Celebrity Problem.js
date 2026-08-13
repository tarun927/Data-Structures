/// eleminate the non potential Celeb and keep the potential celeb by comparing adjacent indexes, like comapre 0,1 who can be celeb, then compare winner with 2 and so on. In the end check row and column of potential celeb if it really is celeb

let a = [
    [0,1,1,1,1],
    [1,0,0,1,0],
    [1,0,0,1,0],
    [0,0,0,0,0],
    [0,1,0,1,0]
];

let potentialCeleb = 0;
for(let i=1; i<a.length; i++){
    if(a[potentialCeleb][i] === 1){
        potentialCeleb = i;
    }
}

for(let j=0; j<a[0].length; j++){
    if(a[potentialCeleb][j] !== 0){
         console.log("No Celeb")
         return;
    }
}
for(let i=0; i<a[0].length; i++){
    if(i !== potentialCeleb && a[i][potentialCeleb] !== 1){
        console.log("No Celeb");
        return;
    }
}
console.log("celeb",potentialCeleb);
