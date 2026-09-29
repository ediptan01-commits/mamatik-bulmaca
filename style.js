* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #101322;
    color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.game {
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    padding: 25px 20px;
    background: linear-gradient(180deg, #151a31, #0c0f1c);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

.level,
.score {
    background: #202640;
    padding: 10px 15px;
    border-radius: 14px;
    font-weight: bold;
}

.score {
    color: #ffd84d;
}

.progress {
    width: 100%;
    height: 8px;
    background: #292e46;
    border-radius: 20px;
    overflow: hidden;
}

#progressBar {
    width: 100%;
    height: 100%;
    background: #6c63ff;
    transition: width 0.3s;
}

main {
    margin-top: 50px;
}

.question-card {
    background: linear-gradient(145deg, #242b4a, #191e35);
    border-radius: 25px;
    padding: 35px 20px;
    text-align: center;
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
}

.question-label {
    font-size: 13px;
    color: #9299bd;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.question {
    font-size: 44px;
    font-weight: bold;
}

.answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 25px;
}

.answer {
    border: none;
    border-radius: 18px;
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: #252b47;
    cursor: pointer;
    transition: 0.2s;
}

.answer:hover {
    transform: translateY(-3px);
    background: #31395d;
}

.answer:active {
    transform: scale(0.96);
}

.bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    color: #aeb5d3;
    font-size: 16px;
}

.streak {
    color: #ff9f43;
}
