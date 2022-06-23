import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Board from './components/board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      6 : [null, null, null, null, null, null, null],
      player1: 'red',
      player2: 'yellow',
      currentPlayer: 'red',
      win: false
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

    if (this.state.currentPlayer === 'red') {
      document.getElementById(event.currentTarget.id).classList.add("red-piece");
      var newRow = this.state[row].map((item, j) => {
        if (col === j) {
          return 'red';
        } else {
          return item;
        }
      })
      this.setState({[row] : newRow})
      this.setState({currentPlayer : 'yellow'})
    } else {
      document.getElementById(event.currentTarget.id).classList.add("yellow-piece");
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
  }

  render () {
    return (<div>
      <h1>Challenge 4</h1>
      <h2>Connect Four</h2>
      <div id="board"></div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));