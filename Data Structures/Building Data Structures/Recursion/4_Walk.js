// Goal: Base Case
// Once again, we'll start with the base case.
// Given a node whose next property is undefined, return the node.
// const n = walk({ id: 1, next: undefined }); 
// console.log(n); // { id: 1, next: undefined }



function walk(node) {
    if (node.next === undefined) {
        return node;
    }
    else{
        return walk(node.next);
    }
}
module.exports = walk;