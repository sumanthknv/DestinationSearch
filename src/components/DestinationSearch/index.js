import DestinationItem from './components/DestinationItem/index.js'

import {Component} from 'react'

import './index.css'

class DestinationSearch extends Component {
  state = {
    SearchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const SearchResult = destinationsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="lists_container">
          {SearchResult.map(eachDestination => (
            <DestinationItem
              destinationsListDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
