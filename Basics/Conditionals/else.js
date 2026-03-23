// Let's update our isNotEqual function to also handle the case where a is equal to b.
// If a is not equal to b return true. Otherwise, return false.
//  It's possible to accomplish this with either === or !==. It's your choice on the operator! 

function isNotEqual(a, b) {
    if (a !== b){
        console.log();
    return true;    
    }
    else{
        console.log();
    return false;
    }
}
module.exports = isNotEqual;