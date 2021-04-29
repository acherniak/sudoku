const board = [["5","3",".",".","7",".",".",".","."],
		["6",".",".","1","9","5",".",".","."],
		[".","9","8",".",".",".",".","6","."],
		["8",".",".",".","6",".",".",".","3"],
		["4",".",".","8",".","3",".",".","1"],
		["7",".",".",".","2",".",".",".","6"],
		[".","6",".",".",".",".","2","8","."],
		[".",".",".","4","1","9",".",".","5"],
		[".",".",".",".","8",".",".","7","9"]];

if (!solveSudoku(board, 0, 0)) console.log("No Solution exists");
else for (let i = 0; i < 9; i++) console.log(board[i].join('  '))

function solveSudoku(board, row, col) {
	if (col == 9) { if (row == 8)	return true; row++; col = 0; } 
	if (board[row][col] != '.') return solveSudoku(board, row, col + 1);
	for (let num = 1; num < 10; num++) {
		if (isSafe(board, row, col, num)) { board[row][col] = num;
			if (solveSudoku(board, row, col + 1)) return true;
		} board[row][col] = '.';
	} return false;
}

function isSafe(board, row, col, num) {
	for (let x = 0; x <= 8; x++) if (board[row][x] == num) return false;
	for (let x = 0; x <= 8; x++) if (board[x][col] == num) return false;
	let startRow = row - row % 3, startCol = col - col % 3;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
    if (board[i + startRow][j + startCol] == num) return false;
	return true
}
