import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  passToParent = (event) => {
    this.props.onChange(event);
  };

  render() {
    return (
      <form className="SearchBar-form">
        <input className="SearchBar-input" value={this.props.value}
          onChange={this.passToParent} type="search"
          placeholder={this.props.placeholder} />
      </form>
    )
  }
}

export default SearchBar;
