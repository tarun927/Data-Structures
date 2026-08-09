/////////////////better//// SC: O(1) , TC: O(n)
var hasCycle = function(head) {
    let one = head;
    let two = head;
    while(two!==null && two.next!==null){
        one = one.next;
        two = two.next.next;
        if(one === two) return true;
    }
    return false;
};

///////////////////////// SC O(n), TC O(n)
var hasCycle = function(head) {
    let nodes = new Set();
    let curr = head;
    while(curr!==null){
        if(nodes.has(curr)) return true;
        nodes.add(curr);
        curr = curr.next
    }
    return false;
};
