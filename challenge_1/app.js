var square = document.getElementById('play');
square.addEventListener('click', changeSquare, false);

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset, false);

function changeSquare (event) {
  if (board.positions[event.target.id] === '' && board.win === false){
    if (board.turns < 9) {
      document.getElementById(event.target.id).innerText = board.move;
      board.positions[event.target.id] = board.move;
      if (board.move === 'X') {
        board.move = 'O';
      } else {
        board.move = 'X';
      }
    }
    board.turns++;
    checkWin();
  }
}

function checkWin () {
  for (var i = 0; i < game.length; i++) {
    var pos1 = game[i][0];
    var pos2 = game[i][1];
    var pos3 = game[i][2];
    if (board.positions[pos1] !== '' &&
    board.positions[pos2] !== '' && board.positions[pos3] !== '') {
      if (board.positions[pos1] === board.positions[pos2]
      && board.positions[pos2] === board.positions[pos3]) {
        board.win = true;
        board.turns = 9;
        alertWinner(board.positions[pos1]);
      }
    }
  }
  if (board.turns === 9 && board.win === false) {
    board.tie = true;
    alertTie();
  }
}

function alertWinner (winner) {
  alert(winner + ' wins!');
}

function alertTie () {
  alert('Tie!');
}

function reset () {
  board.positions = ['', '', '', '', '', '', '', '', ''];
  board.move = 'X';
  board.win = false;
  board.turns = 0;
  board.tie = false;

  for (var i = 0; i < 9; i++) {
    document.getElementById(i).innerText = '';
  }
}

var game = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var board = {};
board.positions = ['', '', '', '', '', '', '', '', ''];
board.move = 'X';
board.win = false;
board.turns = 0;
board.tie = false;