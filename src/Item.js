import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.keyword}</h4>
        <p>{this.props.bin}</p>
      </div>
    );
  }
}

export default Item;
