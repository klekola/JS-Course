'use strict';

/** John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
 *
 * 1. Calculate the average score for each team
 * 2. Decide which teams win in average (the highest average score), and print the winner to the console. It also includes the average score in the output.
 * 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
 *
 * 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
 * 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.*/

let MarksTeam = [89, 120, 103,];
let JohnsTeam = [116, 94, 123,];
let MarysTeam = [97, 134, 105,];

function averageScore(teamScores) {
    let sumScores = 0;
    for (let i = 0; i < teamScores.length; i++) {
        sumScores += teamScores[i];
    }
    return sumScores / teamScores.length;
}

let MarksTeamAS = averageScore(MarksTeam);
let JohnsTeamAS = averageScore(JohnsTeam);
let MarysTeamAS = averageScore(MarysTeam);

if (MarksTeamAS > JohnsTeamAS && MarysTeamAS > MarksTeamAS) {
    console.log(`The Mark's team won with the result ${MarksTeamAS}`);
} else if (JohnsTeamAS > MarksTeamAS && JohnsTeamAS > MarysTeamAS) {
    console.log(`The John's team won with the result ${JohnsTeamAS}`);
} else if (MarysTeamAS > MarksTeamAS && MarysTeamAS > JohnsTeamAS) {
    console.log(`The Mary's team won with the result ${MarysTeamAS}`);
} else {
    console.log(`The teams got the draw with scores: Mark's team: ${MarksTeamAS}, John's team: ${JohnsTeamAS}, Mary's team: ${MarysTeamAS}`);
}