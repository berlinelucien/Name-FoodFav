enum GameMode {
    Easy,
    Hard
}
declare function emojisplosion();

// Set initial state
const emojisByMode = {
    [GameMode.Easy]: ['🦄', '👻', '🐨','😎', '🙄', '🤡', '🙄', '🤡', '🦄', '😎', '👻', '🐨'],
    [GameMode.Hard]: ['😂', '😜', '🦄', '👻', '🐈','😎', '😂', '⚽', '🤡','😜', '⚽', '🤡', '🦄', '😎', '👻', '🐈']
}

const revealedBlocks = new Set();
let numClicks: number = 0;
let prevSquareIndex: number =  -1;
let gameOver:boolean = false;
let gameMode: GameMode;
let emojis: string[];

// Get DOM elements
const squares: NodeListOf<Element> = document.querySelectorAll('.square');
const gameStatusDisplay: HTMLElement = document.getElementById('game-status');
const resetBtn: HTMLElement = document.getElementById('reset-btn');
const easyModeBtn: HTMLElement = document.getElementById('easy-mode');
const hardModeBtn: HTMLElement = document.getElementById('hard-mode');
const lastRow: HTMLElement = document.getElementById('last-row');

// Set initial game mode
setGameMode(GameMode.Easy);

// Randomize the emojis
shuffleEmojis();

squares.forEach((square, index) => {
    // if (index > emojis.length - 1) return;

    square.addEventListener('click', (_ev: MouseEvent) => {
        if (gameOver) return;

        numClicks++;
        square.innerHTML = `${emojis[index]}`;
        
        // A pair has been selected
        if (numClicks == 2) {
            
            // Incorrect match - reset both blocks
            if (emojis[index] !== emojis[prevSquareIndex]) {
                const prevSquare = squares[prevSquareIndex];
                setTimeout(() => {
                    square.innerHTML = '';
                    prevSquare.innerHTML = '';
                }, 500);
            }
            // Correct match
            else {
                revealedBlocks.add(index);
                revealedBlocks.add(prevSquareIndex);
                // emojisplosion();

                // Check if game over
                if (revealedBlocks.size === emojis.length) {
                    gameOver = true;

                    for (let i = 0; i < 5; i++)
                        emojisplosion();
                }

                // Set game progress indicator percentage
                gameStatusDisplay.innerText 
                    = `Progress: ${Math.round(revealedBlocks.size*100/emojis.length)}%`;
            }
            
            numClicks = 0;
        }

        prevSquareIndex = index;
    });
});

resetBtn.addEventListener('click', (_ev: MouseEvent) => {
    resetGame();
});

easyModeBtn.addEventListener('click', (_ev: MouseEvent) => {
    setGameMode(GameMode.Easy);
    resetGame();
});

hardModeBtn.addEventListener('click', (_ev: MouseEvent) => {
    setGameMode(GameMode.Hard);
    resetGame();
});

function resetGame() {
    squares.forEach(square => {
        square.innerHTML = '';
    });

    shuffleEmojis();
    gameOver = false;
    gameStatusDisplay.innerText = 'Progress: 0%';
    revealedBlocks.clear();
}

function setGameMode(newMode: GameMode) {
    emojis = emojisByMode[newMode];

    if (newMode === GameMode.Easy) {
        easyModeBtn.classList.add('clicked');
        hardModeBtn.classList.remove('clicked');
        lastRow.style.display = 'none';
    }
    else {
        hardModeBtn.classList.add('clicked');
        easyModeBtn.classList.remove('clicked');
        lastRow.style.display = 'flex';
    }
}

function shuffleEmojis() {
    emojis.sort(() => Math.random() - 0.5);
}