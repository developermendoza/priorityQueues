class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift().element;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0].element;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task1", 3);
priorityQueue.enqueue("Task2", 1);
priorityQueue.enqueue("Task3", 2);

console.log("Peek: ", priorityQueue.peek());
console.log("Dequeue: ", priorityQueue.dequeue());
console.log("Peek after dequeue: ", priorityQueue.peek());
