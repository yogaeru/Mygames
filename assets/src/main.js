class TicTacToe {
    constructor() {
        this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.currentPlayer = "X";
        this.gameOver = false;
        this.elementBoard = document.getElementById("board");
        this.result = document.getElementById("result");
        this.initBoard();
    }

    initBoard() {
        this.elementBoard.innerHTML = "";
        this.board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.index = index;
            cellElement.addEventListener("click", () => {
                this.makeMove(index);
            })
            this.elementBoard.appendChild(cellElement);
        });

    }

    makeMove(index) {
        if (this.board[index] === " " && !this.gameOver) {
            this.board[index] = this.currentPlayer;
            this.updateBoard();

            if (this.checkWinner()) {
                this.result.textContent = `Pemain ${this.currentPlayer} menang!`;
                this.gameOver = true;
            }
            else if (this.board.every(cell => cell !== " ")) {
                this.result.textContent = `Permainan Seri!!!`;
                this.gameOver = true;
            }
            else {
                this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    updateBoard() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell, index) => {
            cell.textContent = this.board[index];
            console.log(this.board);
        })
    }

    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Baris
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Kolom
            [0, 4, 8], [2, 4, 6]             // Diagonal
        ];

        winPatterns.some(pattern => pattern.every(index => this.board[index] !== " " && this.board[index] === this.board[pattern[0]]));

    };


resetGame() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.currentPlayer = "X";
    this.gameOver = false;
}

}
const game = new TicTacToe();