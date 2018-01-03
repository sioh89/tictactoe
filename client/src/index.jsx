import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      '0 0': ' ', '0 1': ' ', '0 2': ' ',
      '1 0': ' ', '1 1': ' ', '1 2': ' ',
      '2 0': ' ', '2 1': ' ', '2 2': ' ',
      turnsTaken: 0,
      winner: null,
    }
    this.checkWinner = this.checkWinner.bind(this);
    this.checkCol = this.checkCol.bind(this);
    this.checkRow = this.checkRow.bind(this);
    this.checkDiags = this.checkDiags.bind(this);
  }

  pickSquare(e) {
    e.preventDefault();

    const coord = e.target.value;

    if (this.state[coord] === ' ') {
      const other = {
        X: 'O',
        O: 'X',
      };
      
      this.setState({
        [coord]: this.state.turn,
        turn: other[this.state.turn],
        turnsTaken: this.state.turnsTaken + 1,
      }, () => {
        if (this.state.turnsTaken === 9) {
          this.setState({
            winner: 'DRAW',
          })
        } else {

          this.checkWinner(coord);
        }
      });
    }
  }

  checkWinner(coordinate) {
    const temp = coordinate.split(' ');
    const row = temp[0];
    const col = temp[1];

    if (this.checkCol(col) || this.checkRow(row) || this.checkDiags(row, col)) {
      // WINNER
      console.log('potential winner');
    }
  }
  
  checkCol(col) {
    if (this.state[`0 ${col}`] === 'X' &&
        this.state[`1 ${col}`] === 'X' &&
        this.state[`2 ${col}`] === 'X') {
          return true;
        }

    if (this.state[`0 ${col}`] === 'O' &&
        this.state[`1 ${col}`] === 'O' &&
        this.state[`2 ${col}`] === 'O') {
          return true;
        }

    return false;
  }

  checkRow(row) {
    if (this.state[`${row} 0`] === 'X' &&
        this.state[`${row} 1`] === 'X' &&
        this.state[`${row} 2`] === 'X') {
          return true;
        }

    if (this.state[`${row} 0`] === 'O' &&
        this.state[`${row} 1`] === 'O' &&
        this.state[`${row} 2`] === 'O') {
          return true;
        }

    return false;
  }

  checkDiags(coord) {

    if (this.state['0 0'] === 'X' &&
        this.state['1 1'] === 'X' &&
        this.state['2 2']=== 'X') {

          return true;
        }

    if (this.state['0 2'] === 'X' &&
        this.state['1 1'] === 'X' &&
        this.state['2 0']=== 'X') {
          
          return true;
        }

    if (this.state['0 0'] === 'O' &&
        this.state['1 1'] === 'O' &&
        this.state['2 2']=== 'O') {

          return true;
        }

    if (this.state['0 2'] === 'O' &&
        this.state['1 1'] === 'O' &&
        this.state['2 0']=== 'O') {
          
          return true;
        }

    return false;
  } 



  render() {
    return (
      <div>
        TicTacToe!
        <div className="row-1">
          <button value="0 0" onClick={this.pickSquare.bind(this)}>{this.state['0 0']}</button>
          <button value="0 1" onClick={this.pickSquare.bind(this)}>{this.state['0 1']}</button>
          <button value="0 2" onClick={this.pickSquare.bind(this)}>{this.state['0 2']}</button>
        </div>
        <div className="row-2">
          <button value="1 0" onClick={this.pickSquare.bind(this)}>{this.state['1 0']}</button>
          <button value="1 1" onClick={this.pickSquare.bind(this)}>{this.state['1 1']}</button>
          <button value="1 2" onClick={this.pickSquare.bind(this)}>{this.state['1 2']}</button>
        </div>
        <div className="row-3">
          <button value="2 0" onClick={this.pickSquare.bind(this)}>{this.state['2 0']}</button>
          <button value="2 1" onClick={this.pickSquare.bind(this)}>{this.state['2 1']}</button>
          <button value="2 2" onClick={this.pickSquare.bind(this)}>{this.state['2 2']}</button>
        </div>
        Current player: {this.state.turn}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));