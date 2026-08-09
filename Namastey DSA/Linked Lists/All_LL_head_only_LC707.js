////////////////////////////////only head LC 707
function Node(val){
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0 || index>=this.size) return -1;
    let curr = this.head;
    for(let i=0; i<index; i++){
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let temp = new Node(val);
    temp.next = this.head;
    this.head = temp;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {    
    let temp = new Node(val);
    if(this.head === null){
        this.head = temp;
    }else{
        let curr = this.head;
        while(curr.next !== null){
           curr = curr.next;
        }
        curr.next = temp;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<0 || index>this.size) return;
    if(index===0){
        this.addAtHead(val);
    }else if(index === this.size){
        this.addAtTail(val);
    }else{
      let temp = new Node(val);
      let curr = this.head;
      for(let i=0; i<index-1; i++){
          curr = curr.next;
      }
      temp.next = curr.next;
      curr.next = temp;

      this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.size) return;
    if(index===0){
        let temp = this.head;
       this.head = this.head.next;
       temp.next = null;
    }else{
      let curr = this.head;
      for(let i=0; i<index-1; i++){
          curr = curr.next;
      }
      let temp = curr.next;
      curr.next = curr.next.next;
      temp.next = null
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
