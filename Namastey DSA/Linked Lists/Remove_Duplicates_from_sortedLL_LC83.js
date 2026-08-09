var deleteDuplicates = function(head) {
    let prev = head;
    while(prev !== null && prev.next !== null){
        if(prev.next.val === prev.val){
            prev.next = prev.next.next;
        }else{
            prev = prev.next;
        }
    }
    return head;
};
