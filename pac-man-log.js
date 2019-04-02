console.log('Pac-Man eats ghosts for lunch.');

function eatDot() {
    console.log("MUNCH!");
}

eatDot();
MUNCH!

const highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
    const record = { player: playerInitials, score: score };
    highScoreList.push(record); // add record to array
}
highScores
[] // empty array to start
    addHighScore(highScores, 'SDL', 2000);
    highScores
[ { player: 'SDL', score: 2000 } ]
    addHighScore(highScores, 'JSL', 10000);
    highScores
[ { player: 'SDL', score: 2000 },
{ player: 'JSL', score: 10000 } ]