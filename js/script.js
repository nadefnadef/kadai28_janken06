// Get HTML elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startButton = document.getElementById('start-button');
const initialMessage = document.getElementById('initial-message');
const jankenMessage = document.getElementById('janken-message');
const choices = document.querySelectorAll('.choice img');
const result = document.getElementById('result');
const resultMessage = document.getElementById('result-message');
const resultImage = document.getElementById('result-image');

// Start button event listener
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    gameScreen.style.animation = 'slide-up 1s forwards';
    
    setTimeout(() => {
        initialMessage.style.display = 'none';
        jankenMessage.style.display = 'block';
    }, 2000); // Show "最初はグー！" for 2 seconds
});

// Choices event listeners
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playGame(choice.id);
    });
});

// Game logic
const playGame = (playerChoice) => {
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = '';
    let resultImgUrl = '';

    if (playerChoice === computerChoice) {
        resultText = 'あいこでした！';
        resultImgUrl = 'https://th.bing.com/th/id/OIP.AoqbwC6vpsxtGb93qwlFcwHaF5?rs=1&pid=ImgDetMain';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultText = 'やったね！';
        resultImgUrl = 'https://th.bing.com/th/id/OIP.Ue2CTe6XiRGrmutkssq_oAAAAA?rs=1&pid=ImgDetMain';
    } else {
        resultText = '負けちゃった・・・';
        resultImgUrl = 'https://img.cpcdn.com/blog_blog_image_photo/1238740/650s/138ccb430e3e989e0a2f5e1fa507630d.jpg';
    }

    resultMessage.textContent = resultText;
    resultImage.src = resultImgUrl;
    
    // Show player's choice and computer's choice
    initialMessage.style.display = 'none';
    jankenMessage.style.display = 'none';
    result.style.display = 'block';
    setTimeout(() => {
        result.style.display = 'none';
        initialMessage.style.display = 'none';
        jankenMessage.style.display = 'block';
    }, 3000); // Show result for 3 seconds
};

// ESC key event listener for reset
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        resetGame();
    }
});

const resetGame = () => {
    startScreen.style.display = 'flex';
    gameScreen.style.display = 'none';
    result.style.display = 'none';
    initialMessage.style.display = 'block';
    jankenMessage.style.display = 'none';
};
