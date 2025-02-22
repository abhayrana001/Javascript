class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.length === 0 ? "Stack is empty" : this.items.pop();
    }

    peek() {
        return this.items.length === 0 ? "Stack is empty" : this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.pop());  // 10
console.log(stack.pop());  // "Stack is empty"
