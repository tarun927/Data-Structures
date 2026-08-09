var oddEvenList = function(head) {
    if(head === null) return head;
    let oddH = head;
    let oddT = head;
    let evenH = head.next;
    let evenT = head.next;
    while((oddT !== null && oddT.next !== null && oddT.next.next!==null) || (evenT !== null && evenT.next !== null)){
            let temp = oddT.next.next;
            oddT.next = temp; 
            oddT = temp;

            temp = evenT.next.next;
            evenT.next = temp;
            evenT = temp;
    }
    oddT.next = evenH;
    return oddH;
}
