// Goal: Build the Node
// Add a constructor function that takes one argument, data. Store data on the node instance.
// Also, in the constructor, add a property next to the node instance. For now, set this property to null.
// Example:
// const node = new Node(4);
// console.log(node.data); // 4
// console.log(node.next); // null



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = Node;
