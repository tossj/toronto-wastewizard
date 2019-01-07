import React, { Component } from 'react';
import './App.css';

import Item from './Item.js';
import SearchBar from './SearchBar.js';
import axios from 'axios';

class App extends Component {
  state = {table: [], searchTerm: ''};

  componentDidMount() {
    axios.get(
      'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'
    ).then(response => {
      const keywordSet = new Set();
      const table = response.data.reduce((accumulator, currItem) => {
        const keywords = currItem.keywords
          .split(', ')
          .filter(word =>
            (keywordSet.has(word) ? false : Boolean(keywordSet.add(word)))
          ).map(word => ({keyword: word, bin: currItem.category}));
        return [...accumulator, ...keywords];
      }, []);
      this.setState({table});
    }).catch(error => {
      console.err(error);
    });
  }

  searchTable = (event) => {this.setState({searchTerm: event.target.value})};

  render() {
    const {table, searchTerm} = this.state;
    const displayedItems = table
      .filter(item => RegExp(`\\b${searchTerm}\\b`).test(item.keyword));

    return (
      <div className="App">
        <SearchBar value={searchTerm} onChange={this.searchTable} />
        <div>
          {displayedItems.map(item =>
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
