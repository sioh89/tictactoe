import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      '0 0': ' ',
      '0 1': ' ',
      '0 2': ' ',
      '1 0': ' ',
      '1 1': ' ',
      '1 2': ' ',
      '2 0': ' ',
      '2 1': ' ',
      '2 2': ' ',
    }
  }

  pickSquare(e) {
    e.preventDefault();

    if (this.state[e.target.value] === ' ') {
      const other = {
        X: 'O',
        O: 'X',
      };
      this.setState({
        [e.target.value]: this.state.turn,
        turn: other[this.state.turn],
      });
    }
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
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));