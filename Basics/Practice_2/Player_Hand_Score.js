// The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.
// The cards are represented by the first letter in the name of the card:
// A "K" is 4 points
// A "Q" is 3 points
// A "J" is 2 points

// Example Usage:
// console.log( playerHandScore("K") ); // 4
// console.log( playerHandScore("KJ") ); // 6
// console.log( playerHandScore("KQQ") ); // 10 


function playerHandScore(hand) {
    let totalScore = 0;
    for (let i = 0; i < hand.length; i++) {
        const card = hand[i];
        if (card === "K") {
            totalScore += 4;
        } else if (card === "Q") {
            totalScore += 3;
        } else if (card === "J") {
            totalScore += 2;
        }
    }
    return totalScore;
}

module.exports = playerHandScore;