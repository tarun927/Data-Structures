///// 2 pass soln using size


///// 1 pass using n difference between 2 pointers :
var removeNthFromEnd = function(head, n) {
    if(n===0 || head === null) return head;
    let sentinel = new ListNode();
    sentinel.next = head;
    let start = sentinel;
    let nAhead = sentinel;
    for(let i=0; i<n; i++){
        nAhead = nAhead.next;
    }
    while(nAhead.next !== null){
        start = start.next;
        nAhead = nAhead.next;
    }
    start.next = start.next.next;
    return sentinel.next;
};
