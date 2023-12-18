const { Stack, Queue } = require('./dataStructures');

// Stack tests

test('Stack: push() and pop() should work correctly', () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  expect(stack.pop()).toBe(30);
  expect(stack.pop()).toBe(20);
});

test('Stack: pop() on an empty stack should return undefined', () => {
  const stack = new Stack();
  expect(stack.pop()).toBeUndefined();
});


// Queue tests

test('Queue: enqueue() and dequeue() should work correctly', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
});

test('Queue: dequeue() on an empty queue should return undefined', () => {
  const queue = new Queue();
  expect(queue.dequeue()).toBeUndefined();
});