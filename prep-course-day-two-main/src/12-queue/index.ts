/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */



class Queue {

  element: number[];
  constructor() {
    this.element = [];
  }

  add(n: number): void {
    this.element.unshift(n);
  }

  remove() {
    return this.element.pop();
  }


}


export { Queue };
