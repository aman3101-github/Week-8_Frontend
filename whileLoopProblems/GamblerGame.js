let money = 100;
let bets = 0;
let wins = 0;

while (money > 0 && money < 200) {
    bets++;
    // 50% chance of winning
    if (Math.random() < 0.5) { 
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Game Over! Total Bets: ${bets}, Total Wins: ${wins}`);
console.log(money === 200 ? "Goal Reached!" : "Broke!");
