// Rock Paper Scissors Lizard Spock
function getChoice() {
    const prompt = require('prompt-sync')({sigint: true});
    var contains = false;
    var choice;
    var types = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
    var tries = 0;
    while (!contains) {
        if (tries > 0) {
            console.log("I didn't quite catch that, sorry. Make sure to type in all caps!");
        }
        console.log("Choose from: ROCK PAPER SCISSORS LIZARD SPOCK");
        choice = prompt("> ");
        for (var i = 0; i < types.length; i++) {
            if (choice === types[i]) {
                contains = true;
                break;
            }
        }
        tries++;
    }
    return choice;
}
function playRound(choicePlayer, choiceComputer) {
    console.log("");
    console.log("3...");
    console.log("2...");
    console.log("1...");
    console.log("Shoot!");
    console.log("");
    console.log(`You play ${choicePlayer}!`);
    console.log(`Your opponent plays ${choiceComputer}!`);
    var messages_player_won = ["Your ROCK crushes the enemy SCISSORS!", "Your ROCK squishes the enemy LIZARD!", "Your PAPER covers the enemy ROCK!", "Your PAPER disproves the enemy SPOCK!", "Your SCISSORS cuts the enemy PAPER!", "Your SCISSORS decapitates the enemy LIZARD!", "Your LIZARD eats the enemy PAPER!", "Your LIZARD poisons the enemy SPOCK!", "Your SPOCK vaporises the enemy ROCK!", "Your SPOCK smashes the enemy SCISSORS!"];
    var messages_computer_won = ["Your SCISSORS is crushed by the enemy ROCK!", "Your LIZARD is squished by the enemy ROCK!", "Your ROCK is covered by the enemy PAPER!", "Your SPOCK is disproved by the enemy PAPER!", "Your PAPER is cut by the enemy SCISSORS!", "Your LIZARD is decapitated the enemy SCISSORS!", "Your PAPER is eaten by the enemy LIZARD!", "Your SPOCK is poisoned by the enemy LIZARD!", "Your ROCK is vaporised by the enemy SPOCK!", "Your SCISSORS is smashed by the enemy SPOCK!"];
    var winner_types = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
    var wins_against = ["SCISSORS", "LIZARD", "ROCK", "SPOCK", "PAPER", "LIZARD", "PAPER", "SPOCK", "ROCK", "SCISSORS"];
    var winner = 2;
    if (choicePlayer != choiceComputer) {
        for (var i = 0; i < winner_types.length; i++) {
            if (choicePlayer === winner_types[i] && (choiceComputer === wins_against[i * 2] || choiceComputer === wins_against[i * 2 + 1])) {
                if (choiceComputer === wins_against[i * 2]) {
                    console.log(messages_player_won[i * 2]);
                } else {
                    console.log(messages_player_won[i * 2 + 1]);
                }
                winner = 1;
                break;
            } else if (choiceComputer === winner_types[i] && (choicePlayer === wins_against[i * 2] || choicePlayer === wins_against[i * 2 + 1])) {
                if (choicePlayer === wins_against[i * 2]) {
                    console.log(messages_computer_won[i * 2]);
                } else {
                    console.log(messages_computer_won[i * 2 + 1]);
                }
                break;
            }
        }
    } else {
        console.log(`Your ${choicePlayer} is at a draw with the enemy ${choiceComputer}.`);
        winner = 0;
    }
    console.log("");
    return winner;
}

var player_wins = 0;
var computer_wins = 0;
while (player_wins < 3 && computer_wins < 3) {
    let choicePlayer = getChoice();
    let types = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
    let choiceComputer = types[Math.floor(Math.random() * 5)];
    let round = playRound(choicePlayer, choiceComputer);
    if (round === 1) {
        player_wins++;
    } else if (round === 2) {
        computer_wins++;
    }
}
if (player_wins === 3) {
    console.log("You won!!!");
} else {
    console.log("Your opponent won.");
}
new Promise(resolve => setTimeout(resolve, 8000));


