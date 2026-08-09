// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function Node(val){
    this.val = val;
    this.next = null;
}

function LLTail(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

LLTail.prototype.addLast = function(val){
    let temp = new Node(val);
    if(this.head === null){
        this.head = temp
        this.tail = temp;
    }else{
       this.tail.next = temp;
       this.tail = temp;
    }
    this.size++;
}

LLTail.prototype.addFirst = function(val){
    let temp = new Node(val);
    if(this.head === null) this.tail = temp;
    temp.next = this.head;
    this.head = temp;
    this.size++;
}

LLTail.prototype.display = function(){
    let curr = this.head;
    let str = "";
    while(curr !== null){
        str += curr.val+" ";
        curr = curr.next;
    }
    console.log(str);
}

LLTail.prototype.getSize = function(){
    return this.size;
}

LLTail.prototype.removeFirst = function(){
    if(this.head !== null){
        if(this.head.next === null){
           this.tail = null; 
        } 
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.size--;
    }
}

LLTail.prototype.getFirstVal = function(){
     if(this.head !== null){
         return this.head.val;
     }else{
         return -1;
     }
}
LLTail.prototype.getLastVal = function(){
     if(this.head !== null){
         return this.tail.val;
     }else{
         return -1;
     }
}
LLTail.prototype.getValAt = function(idx){
    if(idx<0 || idx>=size) return -1;
     if(this.head !== null){
         let curr = this.head;
         let i = 0;
         while(i !== idx){
             curr = curr.next
             i++;
         }
         return curr.val;
     }else{
         return -1;
     }
}

LLtail.prototype.addAt = function(idx,val){
    if(idx<0 || idx>this.size){
         return -1;
    }else if(idx === 0){
        this.addFirst(val);
    }else if(idx === this.size){
        this.addLast(val);
    }else{
       let temp = new Node(val);
       let curr = this.head;
       for(let i=0; i<idx-1; i++){
           curr = curr.next;
       }
       temp.next = curr.next;
       curr.next = temp;
       this.size++;
    }
}

LLTail.prototype.removeLast = function(){
    if(this.head === null){
        return -1;
    }else if(this.head.next === null){
        this.head = null;
        this.tail = null;
        this.size--;
    }else{
        let curr = this.head;
        for(let i=0; i<this.size-2; i++){
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
        this.size--;
    }
}

LLTail.prototype.reverseData= function(){
    let i = 0;
    let j = this.size-1;
    let front = this.head;
    while(i<j){
        let back = front;
        for(let k=i; k<j; k++){
            back = back.next;
        }
        
        let temp = front.val;
        front.val = back.val;
        back.val = temp;
        
        front = front.next;
        i++;
        j--;
    }
}

LLTail.prototype.reversePointer = function(){
    if(this.head === null || this.head.next === null) return;
    let prev = null;
    let curr = this.head;
    let ahead = curr.next;
    
    while(true){
        curr.next = prev;
        prev = curr;
        curr = ahead;
        if(curr === null) break;
        ahead = curr.next;
    }
    
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
}


// find kth last elsement w/o using size property & iteratively
LLTail.prototype.kthLast = function(k){
    if(k < 0 || k>=this.size){
        return -1;
    }else{
        let curr = this.head;
        let kAhead = this.head;
        for(let i=0; i<k; i++){
            kAhead = kAhead.next;
        }
        while(kAhead.next !== null){
            curr = curr.next;
            kAhead = kAhead.next;
        }
        return curr;
    }
}

// find middle w/o using size property & iteratively
LLTail.prototype.middleNode = function(){
    if(this.head === null) return -1
    let curr = this.head;
    let ahead = this.head;
    while(ahead.next !== null && ahead.next.next!==null){
        curr = curr.next;
        ahead = ahead.next.next;
    }
    return curr;
}

LLTail.prototype.mergeTwoSortedLL = function(l1,l2){
    let merged = new LLTail();
    let currl1 = l1.head;
    let currl2 = l2.head;
    while(currl1 !== null && currl2 !== null){
        if(currl1.val < currl2.val){
            merged.addLast(currl1.val);
            currl1 = currl1.next;
        }else{
            merged.addLast(currl2.val);
            currl2 = currl2.next;
        }
    }
    while(currl1 !== null){
            merged.addLast(currl1.val);
            currl1 = currl1.next;
    }
    while(currl2 !== null){
            merged.addLast(currl2.val);
            currl2 = currl2.next;
    }
    return merged;
}

function getMiddleNode(head,tail){
    let one = head;
    let two = head;
    while(two!==tail && two.next!==tail){
        one = one.next;
        two = two.next.next;
    }
    return one;
}

LLTail.prototype.mergeSort = function(head,tail){
    if(head === tail){
        let lBase = new LLTail();
        let temp = new Node(head.val);
        lBase.head = temp;
        lBase.tail = temp;
        lBase.size++;
        return lBase;
    }
    let midN = getMiddleNode(head,tail);
    let leftSorted = this.mergeSort(head,midN);
    let rightSorted = this.mergeSort(midN.next,tail);
    return this.mergeTwoSortedLL(leftSorted,rightSorted);
}

// only by list
function removeDuplicatesInSorted(sortedLL){
    if(sortedLL.head === null) return;
    let curr = sortedLL.head;
    let nextUniq = sortedLL.head.next;
    let newSize = 1;
    while(nextUniq !== null){
        if(curr.val === nextUniq.val){
            nextUniq = nextUniq.next;
        }else{
            curr.next = nextUniq;
            newSize++;
            
            curr = nextUniq;
            nextUniq = curr.next;
        }
    }
    
    sortedLL.size = newSize;
    sortedLL.tail = curr;
    sortedLL.tail.next = null;
}

// using existing classes functions aF, rF etc.
LLTail.prototype.removeDuplicatesInSorted = function(){
    let ans = new LLTail();
    
    while(this.head !== null){
        let val = this.getFirstVal();
        this.removeFirst();
        if(ans.head === null || ans.tail.val !== val){
            ans.addLast(val);
        }
    }
    
    this.head = ans.head;
    this.tail = ans.tail;
    this.size = ans.size;
}

// only by list
function oddEven(list){
    if(list.size === 0) return;
    let oddHead = null;
    let evenHead = null
    let oddTail = null
    let evenTail = null;
    let size = list.size;
    
    let curr = list.head;
    while(curr !== null){
        if(curr.val%2 === 0){
            if(evenHead !== null){
                evenTail.next = curr;
                evenTail = curr;
            }else{
                evenTail = curr;
                evenHead = curr;
            }
            curr = curr.next;
            evenTail.next = null;
        }else{
            if(oddHead !== null){
                oddTail.next = curr;
                oddTail = curr;
            }else{
                oddTail = curr;
                oddHead = curr;
            }
            curr = curr.next;
            oddTail.next = null;
        }
    }
    
    if(evenHead == null){
        list.head = oddHead;
        list.tail = oddTail;
    }else if(oddHead == null){
        list.head = evenHead;
        list.tail = evenTail;
    }else{
        oddTail.next = evenHead;
        list.head = oddHead;
        list.tail = evenTail;
    }
    list.size = size;
}

// using existing classes functions aF, rF etc.
LLTail.prototype.oddEven = function(){
    if(this.head === null) return;
    let oddLL = new LLTail();
    let evenLL = new LLTail();
    
    while(this.head !== null){
        let val = this.getFirstVal();
        this.removeFirst();
        if(val%2 === 0){
            evenLL.addLast(val);
        }else{
            oddLL.addLast(val);
        }
    }
    
    if(oddLL.head === null){
        this.head = evenLL.head;
        this.tail = evenLL.tail;
    }else if(evenLL.head === null){
        this.head = oddLL.head;
        this.tail = oddLL.tail;
    }else{
        oddLL.tail.next = evenLL.head;
        this.head = oddLL.head;
        this.tail = evenLL.tail;
    }
    this.size = oddLL.size + evenLL.size;
}

// w existing clss fns
LLTail.prototype.kReverse = function(k){
    let reverseK = new LLTail();
    while(this.head !== null ){
        let temp = new LLTail();

        if(this.size>=k){
            for(let i=0; i<k; i++){
             let val = this.getFirstVal();
             this.removeFirst();
             temp.addFirst(val);
            }
        }else{
            while(this.head !== null){
                let val = this.getFirstVal();
                this.removeFirst();
                temp.addLast(val);
            }
        }
        
        if(reverseK.head === null){
            reverseK.head = temp.head;
            reverseK.tail = temp.tail;
            reverseK.size = temp.size;
        }else{
            reverseK.tail.next = temp.head;
            reverseK.tail = temp.tail;
            reverseK.size += temp.size;
        }
    }
    this.head = reverseK.head;
    this.tail = reverseK.tail;
    this.size = reverseK.size;
}

// w/o existing clss fns
LLTail.prototype.kReverse2 = function(k){
    if(this.head === null || k <= 1) return;
    let prev = null;
    let curr = this.head;
    let ahead = curr.next;
    
    let remain = this.size;

    while(remain > 0){

        if(remain < k) break;

        let kTail = curr;

        for(let i=0; i<k; i++){

            curr.next = prev;

            prev = curr;
            curr = ahead;

            if(curr !== null){
                ahead = curr.next;
            }
        }

        remain -= k;

        if(kTail.next === null){
            this.head = prev;
        }else{
            kTail.next.next = prev;
        }

        kTail.next = curr;

        if(remain === 0){
            this.tail = kTail;
        }else{
            prev = kTail;
        }
    }
}

///// Recursive
LLTail.prototype.displayReverse = function(node){
    if(node === null) return;
    
    this.displayReverse(node.next);
    console.log(node.val);
}

//Recursive
LLTail.prototype.reversePointerR = function(node){
    if(node === this.head) this.tail = node;
    if(node.next === null){
        this.head = node;
        return;
    }
    this.reversePointerR(node.next);
    node.next.next = node;
    node.next = null;
}

//Recursive O(n^2)
LLTail.prototype.dataReverse = function(head,tail){
    if(head === tail || tail.next === head){
        return;
    }
    let prevTail = head;
    while(prevTail.next !== tail){
        prevTail = prevTail.next;
    }
    this.dataReverse(head.next,prevTail);
    let temp = head.val;
    head.val = tail.val;
    tail.val = temp;
}

//Recursive O(n) TC & SC
LLTail.prototype.dataReverse2 = function(){

    let left = this.head;
    dataReveHelper(this.head);

    function dataReveHelper(right){
        if(right === null) return;

        dataReveHelper(right.next);
        if(left !== right && right.next !== left && left !==null){
            let temp = left.val;
            left.val = right.val;
            right.val = temp;

            left = left.next;
        }else{
            left = null;
        }
    }
}

//Recursive O(n) TC & SC
LLTail.prototype.isPallindrome = function(){

    let left = this.head;
    return isPallinHelper(this.head);

    function isPallinHelper(right){
        if(right === null) return true;

        let ans = isPallinHelper(right.next);
        if(ans === false) return ans;
        if(left !== right && right.next !== left && left !==null){
            if(left.val !== right.val) ans = false;
            left = left.next;
        }else{
            left = null;
        }
        return ans;
    }
}

//***********Pallindrome TC O(n), SC O(1)****************
// LC 234
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;

    // finding middle
    let one = head;
    let two = head;
    while(two.next !== null && two.next.next !== null){
        one = one.next;
        two = two.next.next;
    }

    // reverse LL after middle
    let prev = one;
    let curr = one.next;
    let ahead = curr.next;
    while(curr !== null){
        curr.next = prev;

        prev = curr;
        curr = ahead;
        if(curr !== null) ahead = curr.next;
    }

    // traverse from both ends and compare
    let i = head;
    let j = prev;
    while(j !== one){
        if(i.val !== j.val) return false;
        i = i.next;
        j = j.next;
    }
    return true;
};

//RECURSIVE ReorderList
LLTail.prototype.fold = function(){
    if(this.head === null || this.head.next === null) return;
    let self = this;

    let left = this.head;
    let nextLeft = left.next;

    foldHelper(this.head,0);

    function foldHelper(right,floor){
        if(right === null) return;
        foldHelper(right.next,floor+1);

        if(floor > Math.floor(self.size/2)){
            left.next = right;
            right.next = nextLeft;

            left = nextLeft;
            if(left !== null){
                nextLeft = left.next;
            }

        }else if(floor === Math.floor(self.size/2)){
            right.next = null;
            self.tail = right;
        }
    }
}

//***********Reorder/Fold TC O(n), SC O(1)****************
// LC 143
var reorderList = function(head) {
    if(head === null || head.next === null) return true;

    // finding middle
    let one = head;
    let two = head;
    while(two.next !== null && two.next.next !== null){
        one = one.next;
        two = two.next.next;
    }

    // reverse LL after middle
    let prev = one;
    let curr = one.next;
    let ahead = curr.next;
    while(curr !== null){
        curr.next = prev;

        prev = curr;
        curr = ahead;
        if(curr !== null) ahead = curr.next;
    }
    one.next = null; //breaking cyle earlier

    // traverse from both ends and compare
    let i = head;
    let j = prev;
    let nexti = i.next;
    let nextj = j.next;
    while(j !== one){
        i.next = j;
        j.next = nexti;
        
        i = nexti;
        j = nextj;
        if(i!==null) nexti = i.next;
        if(j!==null) nextj = j.next;
    }

    // breaking cycle after i,j crosses each other i is in second half
    // i.next = null;
};

//Recursive w/o reversing LL
function add2LL(list1, list2){
    let carry = 0;
    
    let added = null;
    if(list1.size > list2.size){
        added = addHelper(list1.head,list2.head,0,list1.size-list2.size)
    }else{
        added = addHelper(list2.head,list1.head,0,list2.size-list1.size)
    }
    if(carry>0) added.addFirst(carry);
    
    function addHelper(node1,node2,floor,sizeDiff){
        if(node1 === null && node2 === null){
            return new LLTail();
        }
        if(floor >= sizeDiff){
            let ans = addHelper(node1.next,node2.next,floor+1,sizeDiff);
            let sum = node1.val+node2.val+carry;
            let data = sum%10;
            carry = Math.floor(sum/10);
            ans.addFirst(data);
            return ans;
        }else{
            let ans = addHelper(node1.next,node2,floor+1,sizeDiff);
            let sum = node1.val+carry;
            let data = sum%10;
            carry = Math.floor(sum/10);
            ans.addFirst(data);
            return ans;
        }
    }
}


function findIntersection(list1,list2){
    let curr1 = list1.head;
    let curr2 = list2.head;
    if(list1.size>list2.size){
        for(let i=0; i<list1.size-list2.size; i++){
            curr1 = curr1.next;
        }
    }else{
        for(let i=0; i<list2.size-list1.size; i++){
            curr2 = curr2.next;
        }
    }
    while(curr1 !== curr2){
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return curr1;
}

//LL to stack adapter(FILO) -> use addFirst, removeFirst, getFirst instead of addLast, removeLast, getLast as removeLast in our methods -> O(n), removeFirst -> O(1)
function LLtoStack(){
    this.list = new LLTail();
}

LLtoStack.prototype.size = function(){
    return this.list.size;
}
LLtoStack.prototype.push = function(val){
    this.list.addFirst(val);
}
LLtoStack.prototype.pop = function(){
    if(this.list.size === 0){
        console.log('stack underflow');
    }else{
        return this.list.removeFirst();
    }
}
LLtoStack.prototype.top = function(){
    if(this.list.size === 0){
        console.log('stack underflow');
    }else{
        return this.list.getFirstVal();
    }
}


//LL to Queue adapter(FIFO) -> use addLast, removeFirst instead of addFirst, removeLast, getLast as removeLast in our methods -> O(n), removeFirst -> O(1)
function LLtoQueue(){
    this.list = new LLTail();
}

LLtoQueue.prototype.size = function(){
    return this.list.size;
}
LLtoQueue.prototype.add = function(val){
    this.list.addLast(val);
}
LLtoQueue.prototype.remove = function(){
    if(this.list.size === 0){
        console.log('queue underflow');
        return -1
    }else{
        return this.list.removeFirst();
    }
}
LLtoQueue.prototype.peek = function(){
    if(this.list.size === 0){
        console.log('queue underflow');
        return -1;
    }else{
        return this.list.getFirstVal();
    }
}
