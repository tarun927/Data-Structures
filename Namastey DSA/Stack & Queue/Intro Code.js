/////////////////////////////////////////Stack
let stack = [];

stack.push(1);
let pushed = stack.push(3);
console.log(stack,pushed);
///////////////[1,3]

let pop = stack.pop();
//////////////LIFO [1]

let top = stack[stack.length-1];
console.log(stack,pop)

// console.log(stack[2]) //invalid stack operation : as behaving like a normal array




/////////////////////////////////////////Queue
let queue = [];

queue.push(2); //enqueue
queue.push(5);
queue.push(7);
////////[2,5,7]

queue.shift(); //dequeue
////////FIFO [5,7]

let front = queue[0];

// q[3], q.pop() NEVER DO THIS as invalid Queue Operation

console.log('queue', queue, front)
