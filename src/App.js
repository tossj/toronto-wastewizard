import React, { Component } from 'react';
import './App.css';

import Item from './Item.js';
import SearchBar from './SearchBar.js';
import axios from 'axios';

class App extends Component {
  state = {table: [], displayedItems: []};

  componentDidMount() {
    axios.get(
      'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'
    ).then(response => {
      const table = response.data.reduce((accumulator, currItem) => {
        const keywords = currItem.keywords
          .split(', ')
          .map(word => ({keyword: word, bin: currItem.category}));
        return [...accumulator, ...keywords];
      }, []);
      this.setState({table});
    }).catch(error => {
      console.err(error);
    });
  }

  searchTable = (event) => {
    console.log({event});
    const {value} = event.target;
    const {table} = this.state;
    console.log(value, table);
    const displayedItems = table.filter(
      item => RegExp(`\\b${value}\\b`).test(item.keyword));
    this.setState({displayedItems});
  }

  render() {
    const {displayedItems} = this.state;
    return (
      <div className="App">
        <input onChange={this.searchTable} />
        <div>
          {this.state.displayedItems.map(item =>
            (<Item
              key={item.keyword.replace(/ /g, '-')}
              keyword={item.keyword}
              bin={item.bin} />)
          )}
        </div>
      </div>
    );
  }
}

export default App;
