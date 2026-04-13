// Goal: Add First Method
// Write a method called addFirst on LinkedList. This method will take a node and add it to the front of the linked list.

// Example of adding a node:
// const linkedList = new LinkedList();
// linkedList.addFirst( new Node(1) );
// console.log(linkedList.head.data); // 1
// linkedList.addFirst( new Node(2) );
// console.log(linkedList.head.data); // 2
// console.log(linkedList.head.next.data); // 1
//  To accomplish this you will need to modify both the linked list's head and the node's next property.




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