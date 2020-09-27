let correctAns = Math.floor(Math.random() * 10 + 1);
for (chance = 3; chance >= 1; chance--) {
    let input = parseInt(window.prompt(`
    Guess a number between 1-10
    You have ${chance} chances only
    `));

    if (input === correctAns) {
        alert("You Win");
        break;
    } else if (input < correctAns) {
        alert("Correct answer is greater!");
    } else if (input > correctAns) {
        alert("Correct answer is smaller!");
    } else {
        alert("invalid Input");
    };

    if (chance == 1) {
        alert("You lose!");
    };
};

