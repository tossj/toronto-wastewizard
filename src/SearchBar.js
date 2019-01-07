import React, { Component } from 'react';

class SearchBar extends Component {
  passToParent = (event) => {
    this.props.onChange(event);
  };

  render() {
    return (
      <form>
        <input value={this.props.value} onChange={this.passToParent}
          type="search" placeholder="Search" />
      </form>
    )
  }
}

export default SearchBar;
