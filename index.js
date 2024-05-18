// CONNECT 4 GAME
const rows = 6;
const columns = 7;
let currentPlayer = "R";

const board = Array.from({ length: rows }, () => Array(columns).fill(" "));

const play = (col) => {
  for (let i = rows - 1; i >= 0; i--) {
    if (board[i][col] === " ") {
      board[i][col] = currentPlayer;

      if (
        checkHorizontallyWin(board, i) ||
        checkVerticalWin(board, currentPlayer) ||
        checkDiagonallyWin(board, currentPlayer)
      ) {
        return currentPlayer;
      }

      if (checkIsDraw(board)) {
        return "Draw";
      }

      currentPlayer = currentPlayer === "R" ? "Y" : "R";
      break;
    }
  }
};

function checkHorizontallyWin(board, i) {
  let count = 0;
  for (let j = 0; j < columns; j++) {
    if (board[i][j] === currentPlayer) {
      count++;
    } else {
      count = 0;
    }

    if (count === 4) {
      return true;
    }

    return false;
  }
}

function checkVerticalWin(board, player) {
  const rows = board.length;
  const cols = board[0].length;

  for (let col = 0; col < cols; col++) {
    let count = 0;
    for (let row = 0; row < rows; row++) {
      if (board[row][col] === player) {
        count++;
        if (count == 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  }

  return false;
}

function checkDiagonallyWin(board, player) {
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === player) {
        if (checkDiagonallyWinRight(board, player, row, col)) {
          return true;
        }
        if (checkDiagonallyWinLeft(board, player, row, col)) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkDiagonallyWinRight(board, player, row, col) {
  let count = 0;
  let cols = board[0].length;
  while (row < rows && col < cols) {
    if (board[row][col] === player) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
    row++;
    col++;
  }
  return false;
}

function checkDiagonallyWinLeft(board, player, row, col) {
  let count = 0;
  while (row < rows && col >= 0) {
    if (board[row][col] === player) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
    row++;
    col--;
  }
}

function checkIsDraw(board) {
  return board.every((row) => row.every((cell) => cell !== " "));
}

play(0); // R
play(1); // Y
play(1); // R
play(2); // Y
play(3); // R
play(2); // Y
play(2); // R
play(3); // Y
play(3); // R
play(4); // Y
console.log("Winner is : " + play(3));
console.log(board);
