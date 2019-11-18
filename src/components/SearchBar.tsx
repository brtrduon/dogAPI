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
        <form className='form-inline mt-4 mb-5' onSubmit={this.onSubmit}>
          <input className='form-control w-75' type='text' onChange={this.onChange} />
          <button className='btn btn-primary fas fa-search'>Search <img src={icons.searchIcon} /></button>
        </form>
      </Fragment>
    )
  }
}

export default connect(null, { searchBreed })(SearchBar)