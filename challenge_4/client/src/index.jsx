import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
      turns: 0,
      tie: false
    }
    this.setPiece.bind(this);
  }

  testHorizontal () {
    //test horizontal
    this.setState({
      5: ['red', 'red', 'red', 'red', 'yellow', 'yellow', 'yellow']
    })
    setTimeout(() => {
      this.checkWinner();
      if(this.state.win){
        console.log('horizontal pass');
        this.testVertical();
      }}, "10");
  }
  testVertical () {
    this.setState({colHeight: [5, 5, 5, 5, 5, 5, 5],
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      currentPlayer: 'red',
      win: false,
      turns: 0,
      tie: false})
      this.setState({ 0 : [null, null, null, null, null, null, null],
        1 : [null, null, null, null, null, null, null],
        2 : ['red', null, null, null, null, null, null],
        3 : ['red', 'yellow', null, null, null, null, null],
        4 : ['red', 'yellow', null, null, null, null, null],
        5 : ['red', 'yellow', null, null, null, null, null]})
      setTimeout(() => {
        this.checkWinner();
        if(this.state.win){
          console.log('vertical pass');
          this.testMajor();
        }}, "10");
  }
  testMajor () {
    this.setState({colHeight: [5, 5, 5, 5, 5, 5, 5],
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      currentPlayer: 'red',
      win: false,
      turns: 0,
      tie: false})
      this.setState({ 0 : [null, null, null, null, null, null, null],
        1 : [null, null, null, null, null, null, null],
        2 : [null, null, null, 'red', null, null, null],
        3 : [null, null, 'red', 'yellow', null, null, null],
        4 : [null, 'red', 'yellow', 'yellow', null, null, null],
        5 : ['red', 'yellow', 'red', 'yellow', 'red', null, null]})
      setTimeout(() => {
        this.checkWinner();
        if(this.state.win){
          console.log('major pass');
          this.testMinor();
        }}, "10");
  }
  testMinor () {
    this.setState({colHeight: [5, 5, 5, 5, 5, 5, 5],
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      currentPlayer: 'red',
      win: false,
      turns: 0,
      tie: false})
      this.setState({ 0 : [null, null, null, null, null, null, null],
        1 : [null, null, null, null, null, null, null],
        2 : ['red', 'yellow', null, null, null, null, null],
        3 : ['red', 'red', null, null, null, null, null],
        4 : ['yellow', 'yellow', 'red', null, null, null, null],
        5 : ['red', 'yellow', 'yellow', 'red', null, null, null]})
      setTimeout(() => {
        this.checkWinner();
        if(this.state.win){
          console.log('minor pass');
          this.testTie();
        }}, "10");
  }
  testTie () {
    this.setState({colHeight: [5, 5, 5, 5, 5, 5, 5],
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      currentPlayer: 'red',
      win: false,
      turns: 0,
      tie: false})
      this.setState({ 0 : ['yellow', 'red', 'yellow', 'red', 'yellow', 'red', 'yellow'],
        1 : ['yellow', 'red', 'yellow', 'red', 'yellow', 'red', 'yellow'],
        2 : ['red', 'yellow', 'red', 'yellow', 'red', 'yellow', 'red'],
        3 : ['red', 'yellow', 'red', 'yellow', 'red', 'yellow', 'red'],
        4 : ['yellow', 'red', 'yellow', 'red', 'yellow', 'red', 'yellow'],
        5 : ['red', 'yellow', 'red', 'yellow', 'red', 'yellow', 'red'],
        turns: 42}
        )
      setTimeout(() => {
        this.checkWinner();
        if(this.state.tie){
          console.log('tie pass');
          this.reset();
        }}, "10");
  }
  reset() {
    this.setState({colHeight: [5, 5, 5, 5, 5, 5, 5],
      0 : [null, null, null, null, null, null, null],
      1 : [null, null, null, null, null, null, null],
      2 : [null, null, null, null, null, null, null],
      3 : [null, null, null, null, null, null, null],
      4 : [null, null, null, null, null, null, null],
      5 : [null, null, null, null, null, null, null],
      currentPlayer: 'red',
      win: false,
      turns: 0,
      tie: false})
      $('#winner').text('');
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
    this.testHorizontal();
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

    this.setState((state, props) => ({
      turns: state.turns + 1
    }))

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
              if(!this.state.win){
                this.setWinner(row, col);
              }
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
              if(!this.state.win){
                this.setWinner(row, col);
              }
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
              if(!this.state.win){
                this.setWinner(row, col);
              }
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
              if(!this.state.win){
                this.setWinner(row, col);
              }
            }
        }
      }
    }
    if(this.state.turns === 42 && !this.state.win) {
      this.setState({tie: true})
      document.getElementById("winner").append('tie!');
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