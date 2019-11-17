import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { addToFavorites, removeFromFavorites } from '../redux/actions'
import Heart from './Heart'

class Dog extends Component<any, any> {
  isInFavorites = dogUrl => {
    const favoriteDogList = JSON.parse(localStorage.getItem('favoriteDogList'))
    if (favoriteDogList.indexOf(dogUrl) === -1) {
      return false
    } else {
      return true
    }
  }

  onClick = e => {
    const dogUrl = e.target.src
    if (this.isInFavorites(dogUrl)) {
      this.props.removeFromFavorites(dogUrl)
    } else {
      this.props.addToFavorites(dogUrl)
    }
  }
  
  renderDogs = () => {
    const dogUrls = this.props.dogUrls

    if (!dogUrls) {
      return null
    }
    
    return dogUrls.map((dogUrl, index) => {
      return (
        <Fragment>
          <img src={dogUrl} key={index} onClick={this.onClick} />
          {this.renderHeart(dogUrl)}
        </Fragment>
        )
      })
    }

  renderHeart = dogUrl => {
    let icon = 'whiteHeartIcon',
        alt = 'white heart icon'

    if (this.isInFavorites(dogUrl)) {
      icon = 'redHeartIcon'
      alt = 'red heart icon'
    }

    return <Heart icon={icon} alt={alt} />
  }

  render() {
    return (
      <Fragment>
        {this.renderDogs()}
      </Fragment>
    )
  }
}

export default connect(null, { addToFavorites, removeFromFavorites })(Dog)