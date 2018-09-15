import React, { Component } from 'react';
import Counter from './Counter';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    backgroundColor: 'lightgray',
    margin: 0,
    padding: 20,
    color: 'black',
  },
  btnContainer: {
    display: 'flex'
  },
  addBtn: {
    height: 50,
    backgroundColor: 'green',
    color: 'white',
    width: '50%'
  },
  deleteBtn: {
    height: 50,
    backgroundColor: 'red',
    color: 'white',
    width: '50%'
  },
  counterContainer: {
    padding: 0,
    margin: 0,
  },
  counter: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'orange'
  }
}

class CounterList extends Component {
  state = {
    counterNum: 1
  }

  addCounter = () => this.setState({ counterNum: this.state.counterNum + 1 });
  removeCounter = () => this.setState({ counterNum: this.state.counterNum - 1 });

  createList = () => {
    let result = [];
    for(let i = 0; i < this.state.counterNum; i++) {
      result.push(<Counter />);
    }

    return result;
  }

  render() {
    return (
      <div style={styles.header}>
        <h1 style={styles.title}>COUNTER LIST</h1>
        
        <div style={styles.btnContainer}>
          <button 
            id='add-counter' 
            onClick={this.addCounter}
            style={styles.addBtn}
          >
            ADD
          </button>

          <button 
            id='remove-counter' 
            onClick={this.removeCounter}
            style={styles.deleteBtn}
          >
            DELETE
          </button>
        </div>

        <ul style={styles.counterContainer}>
          {
            this.createList().map(
              (counter, idx) => <div key={idx} style={styles.counter}>{counter}</div>
            )
          }
        </ul>
      </div>
    )
  }
}

export default CounterList;