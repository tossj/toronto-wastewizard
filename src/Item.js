import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <h4>{this.props.keyword}</h4>
        <p>{this.props.bin}</p>
      </div>
    );
  }
}

export default Item;
