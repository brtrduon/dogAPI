import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getFavorites } from '../redux/actions'
import Dog from './Dog'

class Favorites extends Component<any, any> {
  componentDidMount() {
    this.props.getFavorites()
  }

  render() {
    return (
      <Fragment>
        Favorites
        <Dog dogUrls={this.props.dogUrls} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogUrls: state.favoriteDogUrls
  }
}

export default connect(mapStateToProps, { getFavorites })(Favorites)