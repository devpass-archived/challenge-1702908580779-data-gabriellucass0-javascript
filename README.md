# JavaScript Data Structures Challenge

In this challenge, you are required to implement two data structures - `Stack` and `Queue` - using JavaScript.

## Stack

A stack is a linear data structure that follows the LIFO (Last-in, First-out) principle. It has two main operations:

- `push(item)`: Adds an item to the stack.
- `pop()`: Removes and returns the top item from the stack.

## Queue

A queue is a linear data structure that follows the FIFO (First-in, First-out) principle. It has two main operations:

- `enqueue(item)`: Adds an item to the queue.
- `dequeue()`: Removes and returns the first item from the queue.

## Implementation

You need to create two JavaScript classes - `Stack` and `Queue` - that implement the above operations. You should use arrays to store the data.

## Example Usage

```javascript
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // Output: 30

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
```