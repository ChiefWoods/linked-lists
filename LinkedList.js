import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      let lastNode = this.headNode;
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
      lastNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let length = 0;
    let lastNode = this.headNode;
    while (lastNode) {
      length++;
      lastNode = lastNode.nextNode;
    }
    return length;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let lastNode = this.headNode;
    while (lastNode.nextNode) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  at(index) {
    if (index >= this.size()) {
      return "Out of range";
    } else {
      let node = this.headNode;
      for (let i = 0; i < index; i++) {
        node = node.nextNode;
      }
      return node;
    }
  }

  pop() {
    if (this.headNode) {
      let node = this.headNode;
      if (node.nextNode) {
        let previous = null;
        while (node.nextNode) {
          previous = node;
          node = node.nextNode;
        }
        if (previous) {
          previous.nextNode = null;
        }
      } else {
        this.headNode = null;
      }
    }
  }

  contains(value) {
    if (this.headNode) {
      let node = this.headNode;
      while (node) {
        if (node.value === value) {
          return true;
        }
        node = node.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let node = this.headNode;
    let count = 0;
    while (node) {
      if (node.value === value) {
        return count;
      }
      node = node.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let node = this.headNode;
    let str = "";
    while (node) {
      str += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    console.log(str += "null");
  }

  insertAt(value, index) {
    if (index >= this.size()) {
      console.log("Out of range");
    } else if (index === 0) {
      let newNode = new Node(value);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    } else {
      let previous = null;
      let node = this.headNode;
      for (let i = 0; i < index; i++) {
        previous = node;
        node = node.nextNode;
      }
      previous.nextNode = new Node(value);
      previous.nextNode.nextNode = node;
    }
  }

  removeAt(index) {
    if (index >= this.size()) {
      console.log("Out of range");
    } else if (index === 0) {
      this.headNode = this.headNode.nextNode;
    } else {
      let previous = null;
      let node = this.headNode;
      for (let i = 0; i < index; i++) {
        previous = node;
        node = node.nextNode;
      }
      previous.nextNode = node.nextNode;
    }
  }
}
