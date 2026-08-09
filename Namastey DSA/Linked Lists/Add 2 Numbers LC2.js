var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let curr1 = l1;
    let curr2 = l2;
    let sentinelAns = new ListNode();
    let currAns = sentinelAns;
    while(curr1 !== null && curr2 !== null){
        let sum = curr1.val + curr2.val + carry;
        currAns.next = new ListNode(sum%10);
        carry = Math.floor(sum/10);

        curr1 = curr1.next;
        curr2 = curr2.next;
        currAns = currAns.next;
    }
    while(curr1 !== null){
        let sum = curr1.val + carry;
        currAns.next = new ListNode(sum%10);
        carry = Math.floor(sum/10);

        curr1 = curr1.next;
        currAns = currAns.next;
    }
    while(curr2 !== null){
        let sum = curr2.val + carry;
        currAns.next = new ListNode(sum%10);
        carry = Math.floor(sum/10);

        curr2 = curr2.next;
        currAns = currAns.next;
    }
    if(carry) currAns.next = new ListNode(carry);
    return sentinelAns.next;
};
