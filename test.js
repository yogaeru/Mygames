const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Baris
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Kolom
    [0, 4, 8], [2, 4, 6]             // Diagonal
];

const board = ['x', 'x', 'x', " ", 'O', " ", 'o', " ", " "];

// winPatterns.some(index => {
//     const [a, b, c] = index;
//     const winner = board[a]!==" " && board[a] === board[b] && board[a] === board[c];
//     console.log(a, b, c);
//     console.log(winner);
// })

// some mengambil elemen disetiap winPattern contoh pattern akan mengambil elemen pertama yaitu [0,1,2] lalu
// every akan mengecek semua kondisi di pattern apakah bernilai true semua jika iya akan return true dan sebaliknya
// every akan mengecek board[index] apakah dengan board[pattern[0]], misal parttern [0,1,2]
// every akan mengecek setiap index dari pattern yaitu 0,1,2
// pertama akan mengecek board[0] apakah sama dnegan board[pattern[0]] karena sama jadi ini akan bernilai true
// jika index dari semua pattern sudah bernilai true maka akan return true jika tidak akan return false

winPatterns.some(pattern => {
    console.log(pattern);
    const winner = pattern.every(index => {
        console.log(index);
        console.log(board[index]);
        console.log("ini 0" + board[pattern[0]]);
        return board[index] !== " " && board[index] === board[pattern[0]];
    })
    console.log(winner);
})

