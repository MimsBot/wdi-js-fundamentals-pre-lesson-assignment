let powerPelletEaten = false;
let ghosts = 4;

while (true) {
    console.log('Ghosts remaining:' + ghosts);

    if (powerPelletEaten == false ) {
        console.log('Pac-man easts the power pellet.');
        powerPelletEaten = true;
    }
    else if (ghosts > 0) {
        console.log('Pac-man eats a ghost.');
        ghosts--;
    }
    else {
        break;
    }
}

console.log('Pac-Man returns home after a long day in the maze.');