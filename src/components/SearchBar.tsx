import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { icons } from '../assets'
import { searchBreed } from '../redux/actions'

class SearchBar extends Component<any, any> {
  state = {
    breed: ''
  }

  onChange = e => {
    this.setState({
      breed: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const breed = this.state.breed
    this.props.searchBreed(breed)
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input type='text' onChange={this.onChange} />
          <button>Search <img src={icons.searchIcon} /></button>
        </form>
      </Fragment>
    )
  }
}

export default connect(null, { searchBreed })(SearchBar)