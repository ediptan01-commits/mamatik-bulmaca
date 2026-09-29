let level = 1;
let score = 0;
let streak = 0;
let time = 15;

let correctAnswer;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreText = document.getElementById("score");
const levelText = document.getElementById("level");
const timerText = document.getElementById("timer");
const streakText = document.getElementById("streak");
const progressBar = document.getElementById("progressBar");

function newQuestion() {

    time = 15;

    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;

    correctAnswer = a + b;

    question.textContent = `${a} + ${b} = ?`;

    let options = [
        correctAnswer,
        correctAnswer + Math.floor(Math.random() * 5) + 1,
        correctAnswer - Math.floor(Math.random() * 5) - 1,
        correctAnswer + Math.floor(Math.random() * 10) + 5
    ];

    options = [...new Set(options)];

    while (options.length < 4) {
        options.push(correctAnswer + Math.floor(Math.random() * 20) + 1);
    }

    options.sort(() => Math.random() - 0.5);

    answers.innerHTML = "";

    options.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.onclick = () => checkAnswer(answer);

        answers.appendChild(button);

    });

    updateProgress();
}

function checkAnswer(answer) {

    if (answer === correctAnswer) {

        score += 10;
        streak++;

        if (streak % 5 === 0) {
            score += 25;
        }

        if (streak >= 3) {
            score += 5;
        }

        level++;

    } else {

        streak = 0;

    }

    scoreText.textContent = score;
    levelText.textContent = level;
    streakText.textContent = streak;

    newQuestion();
}

function updateProgress() {

    progressBar.style.width = (time / 15 * 100) + "%";
}

setInterval(() => {

    time--;

    timerText.textContent = time;

    updateProgress();

    if (time <= 0) {

        streak = 0;
        streakText.textContent = streak;

        newQuestion();

    }

}, 1000);

newQuestion();
