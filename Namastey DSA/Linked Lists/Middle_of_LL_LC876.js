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
  
var middleNode = function(head) {
    let one = head;
    let two = head;
    while(two!==null && two.next!==null){
        one = one.next;
        two = two.next.next;
    }
    return one;
};
