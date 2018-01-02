import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      board: [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]],
    }
  }
  render() {
    return (
      <div>
        TicTacToe!
        <div className="row-1">
          <button>{this.state.board[0][0]}</button>
          <button>{this.state.board[0][1]}</button>
          <button>{this.state.board[0][2]}</button>
          </div>
        <div className="row-2">
        <button>{this.state.board[1][0]}</button>
        <button>{this.state.board[1][1]}</button>
        <button>{this.state.board[1][2]}</button>
        </div>
        <div className="row-3">
        <button>{this.state.board[2][0]}</button>
        <button>{this.state.board[2][1]}</button>
        <button>{this.state.board[2][2]}</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));