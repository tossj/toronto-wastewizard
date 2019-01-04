import React, { Component } from 'react';

class SearchBar extends Component {
  passToParent = (event) => {
    console.log(event, 1);
    this.props.onChange(event)
  };
  render() {
    return (
      <input onChange={this.passToParent} type="search" />
    )
  }
}

export default SearchBar;
