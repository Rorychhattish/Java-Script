// Goal: Guard it
// The function friendName currently retrieves the name property from the friend.
// The problem is, sometimes friend is undefined. When this is the case, let's return undefined without throwing an exception.


function friendName(friend) {
    return friend?.name;
}

module.exports = friendName;