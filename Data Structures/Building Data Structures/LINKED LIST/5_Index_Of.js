// Goal: Write Index Of
// Write a method indexOf on LinkedList which takes node and returns a number index that indicates where the node is in the list.
// To determine if a node is equal to another node you can simply compare them with (node1 === node2). This will evaluate to true if they are the same node.
//  Technically when comparing objects, the === operator will return true if they point to same place in memory. For our purposes this will work if they refer to the same node. You can find more on the equality operators here.

// Examples of using indexOf:
// const node1 = new Node(4);
// const node2 = new Node(3);
// const linkedList = new LinkedList();
// linkedList.addLast(node1); // node1 
// linkedList.addLast(node2); // node1 --> node2
// console.log(linkedList.indexOf(node1)); // 0
// console.log(linkedList.indexOf(node2)); // 1
// You can assume that the node is in the list. There is no need to handle the case where it is not found… unless you really want to! 




class LinkedList {
    constructor(){
        this.head = null;
    }
    addFirst(newNode) {
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(lastNode) {
        if (this.head === null) {
            this.head = lastNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = lastNode;
    }
    indexOf(node) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current === node) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;
    }
}

module.exports = LinkedList;