// Goal: Junk Food Time!

// Can't help it sometimes, we're hungry for junk food. 
// We willEat if we have pizza, donuts or cookies! 
// Complete the willEat function. The three arguments will be boolean values (true or false). If any of them are true, return true.


function willEat(hasPizza, hasDonuts, hasCookies) {
    if (hasPizza || hasDonuts || hasCookies){
        return true;
    }
    else {
        return false;
    }
}

module.exports = willEat;
