import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Board from './components/board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colHeight: [5, 5, 5, 5, 5, 5, 5],
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      currentPlayer: 'red',
      win: false,
      tie: false
    }
    this.setPiece.bind(this);
  }

  componentDidMount () {
    for(var row=0; row<6; row++){
      for(var col=0; col<7; col++){
        var cell = document.createElement("div");
        cell.id = row.toString() + "-" + col.toString();
        cell.classList.add("cell");
        cell.addEventListener("click", (e) => this.setPiece(e));
        document.getElementById("board").append(cell);
      }
    }
  }

  setPiece (event) {
    var coordinate = event.currentTarget.id.split("-");
    var row = parseInt(coordinate[0]);
    var col = parseInt(coordinate[1]);

    row = this.state.colHeight[col];
    if(row < 0) {
      return;
    }

    if (this.state.currentPlayer === 'red') {
      document.getElementById(`${row}-${col}`).classList.add("red-piece");
      var newRow = this.state[row].map((item, j) => {
        if (col === j) {
          return 'red';
        } else {
          return item;
        }
      })
      this.setState({[row] : newRow})
      this.setState({currentPlayer : 'yellow'})
    } else if (this.state.currentPlayer === 'yellow') {
      document.getElementById(`${row}-${col}`).classList.add("yellow-piece");
      console.log('yellow', this.state[row])
      var newRow = this.state[row].map((item, j) => {
        if (col === j) {
          return 'yellow';
        } else {
          return item;
        }
      })
      this.setState({[row] : newRow})
      this.setState({currentPlayer : 'red'})
    }

    var newColHeight = this.state.colHeight.map((item, j) => {
      if (col === j) {
        var value = this.state.colHeight[col] - 1;
        return value;
      } else {
        return item;
      }
    })
    this.setState({colHeight : newColHeight})

    this.checkWinner();
  }

  setWinner(row, col) {
    this.setState({win: this.state[row][col]});
    document.getElementById("winner").append(`${this.state.win} wins!`);
  }

  checkWinner() {
    for(var row = 0; row < 6; row++) {
      for(var col = 0; col < 4; col++) {
        if (this.state[row][col] !== null){
          if (this.state[row][col] === this.state[row][col+1] &&
            this.state[row][col+1] === this.state[row][col+2] &&
            this.state[row][col+2] === this.state[row][col+3]) {
              this.setWinner(row, col);
            }
        }
      }
    }
    for(var col = 0; col < 7; col++) {
      for(var row = 0; row < 3; row++) {
        if (this.state[row][col] !== null) {
          if (this.state[row][col] === this.state[row+1][col] &&
            this.state[row+1][col] === this.state[row+2][col] &&
            this.state[row+2][col] === this.state[row+3][col]) {
              this.setWinner(row, col);
            }
        }
      }
    }
    for(var row = 0; row < 3; row++) {
      for(var col = 0; col < 4; col++) {
        if (this.state[row][col] !== null) {
          if (this.state[row][col] === this.state[row+1][col+1] &&
            this.state[row+1][col+1] === this.state[row+2][col+2] &&
            this.state[row+2][col+2] === this.state[row+3][col+3]) {
              this.setWinner(row, col);
            }
        }
      }
    }
    for(var row = 5; row > 3; row--) {
      for(var col = 0; col < 4; col++) {
        if (this.state[row][col] !== null) {
          if (this.state[row][col] === this.state[row-1][col+1] &&
            this.state[row-1][col+1] === this.state[row-2][col+2] &&
            this.state[row-2][col+2] === this.state[row-3][col+3]) {
              this.setWinner(row, col);
            }
        }
      }
    }
  }

  render () {
    return (<div>
      <h1>Challenge 4</h1>
      <h2>Connect Four</h2>
      <h3 id="winner"></h3>
      <div id="board"></div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));