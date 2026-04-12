// Goal: Find the Last Node
// OK, now that we've established a base case, let's add in the recursive step!
// Keep walking the nodes until you find the last one. If the node has a node.next, then walk that node:
// walk({id: 1, next: {…}}); 
//     walk({id: 2, next: {…}}); 
//         walk({id: 3, next: {…}}); 
//             walk({id: 4, next: undefined}); 
// Once you've found the last node (like 4 in this example), return it all the way up the call stack!



function walk(node) {
    if (node.next === undefined) {
        return node;
    }
    else{
        return walk(node.next);
    }
}
module.exports = walk;