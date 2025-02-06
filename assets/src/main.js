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

    makeMove(index){
        if (this.board !== " " && !this.gameOver){
            this.board[index] = this.currentPlayer;
            
        }
    }
}

const game = new TicTacToe();
const elemen = document.querySelectorAll(".cell");

console.log(elemen.length);