// Goal: Linked List Constructor
// Add a constructor function to the LinkedList in the new file LinkedList.js.
// The linked list should have a head property that is set to null by default.

// Example:
// const linkedList = new LinkedList();
// console.log(linkedList.head); // null




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