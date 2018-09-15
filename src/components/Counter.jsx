import React, { Component, Fragment } from 'react';

const styles = {
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto'
  },
  btn: {
    padding: 20
  }
}

class Counter extends Component {
  state = {
    count: 0
  }

  makeIncrement = amount => this.setState({ count: this.state.count + amount });

  increment = () => this.makeIncrement(1);
  decrement = () => this.makeIncrement(-1);

  render() {
    return (
      <Fragment>
        <p id='count' style={styles.label}>CLICK COUNT: {this.state.count}</p>
        <button 
          id='increment-btn' 
          onClick={this.increment}
          style={styles.btn}
        >
            ++++
        </button>
        <button 
          id='decrement-btn' 
          onClick={this.decrement}
          style={styles.btn}
        >
            DECREMENT
        </button>
      </Fragment>
    )
  }
}

export default Counter;