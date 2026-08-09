// iterative
var swapPairs = function(head) {
    let sentinel = new ListNode(); //sentinel
    sentinel.next = head;

    let prev = sentinel;
    let curr = head;
    while(curr !== null && curr.next !== null){
        let ahead = curr.next;

        curr.next = ahead.next;
        ahead.next = curr;
        prev.next = ahead;

        prev = curr;
        curr = prev.next;
    }
    return sentinel.next;
};


////// recursive
var swapPairs = function(head) {
    return swapPairHelper(head);
};

function swapPairHelper(node){
    if(node === null || node.next === null) return node;
    let newHead = node.next;
    let swappedHead = swapPairHelper(node.next.next);
    node.next.next = node;
    node.next = swappedHead;
    return newHead;
}
