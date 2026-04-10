// Goal: Add 10 to the First 3 Players
// Let's modify our addScore function to only add 10 points to the first 3 players.
// Be careful on this one! The index passed into our function will be zero-based, which means it starts at 0. 
// Also, be sure to always return something inside the mapped function or the element will be undefined.



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