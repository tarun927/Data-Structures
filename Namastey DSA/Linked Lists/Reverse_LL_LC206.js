/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    let prev = null;
    let curr = head;
    let ahead = curr.next;
    while(curr!==null){
        curr.next = prev;

        prev = curr;
        curr = ahead;
        if(curr!=null) ahead = curr.next;
    }
    return prev;
};
