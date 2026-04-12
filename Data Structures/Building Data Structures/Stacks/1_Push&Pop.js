// Goal: Implement the Methods
// In our Stack class, you can see we already have a constructor with an items array.
// In the push function, let's add a new item to our items.
// In the pop function, let's remove the last item from items and return it.
//  Feel free to use JavaScript array methods with similar names. 



class Stack {
    constructor() {
        this.items = [];
    }   
    push(item) {
        // Your code here
        this.items.push(item);
    }
    pop() {        // Your code here
        return this.items.pop();
    }   
    isEmpty() {
        return this.items.length === 0;
    }
    peek(){
        return this.items[this.items.length - 1];
    }
}