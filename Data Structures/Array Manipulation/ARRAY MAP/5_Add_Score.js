// Goal: Add Score
// Given an array of players, add 10 to their score. Return a new array with these additional points.
// Each player will be an object with the following two properties:
// id - a number uniquely identifying the player
// score - a number representing the player's points
// Example:
// const a = addScore([
//     { id: 0, score: 5 },
//     { id: 1, score: 20 }
// ]); 
// console.log(a); // [{id: 0, score: 15},{id: 0, score: 30}]



function addScore(players) {
    return players.map((player, i) => {
        if (i < 3) {
            return {
                ...player,
                score: player.score + 10
            };
        }
        return player;
    });
}

module.exports = addScore;