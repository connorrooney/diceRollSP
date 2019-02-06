const rollBtn = document.getElementById("roller");
const scoreUpdater = document.getElementById("score");
const rollUpdater = document.getElem
const diceImg = document.getElementById("dice");
let score = 0;



roller.addEventListener("click", () => {
    let num = (Math.floor(Math.random() * 6 ) + 1);
    console.log(num);
    if(num == 1){
        score = 0;
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice1.png";
    } else if(num == 2) {
        score += 2;
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice2.png";
    } else if(num == 3) {
        score += 3;
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice3.png";
    } else if(num == 4){
        score += 4
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice4.png";
    } else if(num == 5){
        score += 5
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice5.png";
    } else if(num == 6) {
        score += 6
        scoreUpdater.textContent = score;
        diceImg.src = "/img/dice6.png";
    }
});


