// script.js

let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');
let resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let game = true;

let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let cellclick = (e) => {
    let index = e.target.getAttribute('data-index');
    if (board[index] !== '' || !game) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    chk();
};

let chk = () => {
    let roundWon = false;
    for (let i = 0; i < conditions.length; i++) {
        let [a, b, c] = conditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.textContent = `${currentPlayer} has won!`;
        game = false;
    } else if (!board.includes('')) {
        message.textContent = 'Game is a draw!';
        game = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `It's ${currentPlayer}'s turn`;
    }
};

let resetGame = () => {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    game = true;
    message.textContent = `It's ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
};

cells.forEach(cell => cell.addEventListener('click', cellclick));
resetButton.addEventListener('click', resetGame);
message.textContent = `It's ${currentPlayer}'s turn`;
