import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addToFavorites, removeFromFavorites } from '../redux/actions'
import Heart from './Heart'

class Dog extends Component<any, any> {
  isInFavorites = dogUrl => {
    const favoriteDogList = JSON.parse(localStorage.getItem('favoriteDogList')) || []
    return favoriteDogList.indexOf(dogUrl) !== -1
  }

  onClick = e => {
    const bgImgStr = e.target.style.backgroundImage
    const dogUrl = bgImgStr.slice(5, (bgImgStr.length - 2))

    if (this.isInFavorites(dogUrl)) {
      this.props.removeFromFavorites(dogUrl)
    } else {
      this.props.addToFavorites(dogUrl)
    }

    this.forceUpdate()
  }
  
  renderDogs = () => {
    const dogUrls = this.props.dogUrls

    if (!dogUrls) {
      return null
    }

    let div = []
    let i;
    const dogUrlsLength = dogUrls.length - (dogUrls.length % 3);
    for (i = 0; i < dogUrlsLength; i += 3) {
      let dogUrl1 = dogUrls[i],
          dogUrl2 = dogUrls[i+1],
          dogUrl3 = dogUrls[i+2];

      div.push(
        <div className='row'>
          <div className='col'>
            <div className='dog-image square' style={{backgroundImage: `url(${dogUrl1})`}} key={dogUrl1} onClick={this.onClick}></div>
            <div className='heart-image'>{this.renderHeart(dogUrl1)}</div>
          </div>
          <div className='col'>
            <div className='dog-image square' style={{backgroundImage: `url(${dogUrl2})`}} key={dogUrl2} onClick={this.onClick}></div>
            <div className='heart-image'>{this.renderHeart(dogUrl2)}</div>
          </div>
          <div className='col'> 
            <div className='dog-image square' style={{backgroundImage: `url(${dogUrl3})`}} key={dogUrl3} onClick={this.onClick}></div>
            <div className='heart-image'>{this.renderHeart(dogUrl3)}</div>
          </div>
        </div>
      )
    }

    if (i < dogUrls.length) {
      const blankDivLength = 3 - (dogUrls.length % 3);
      let rowDivCols = []
      for (; i < dogUrls.length; i++) {
        let dogUrl = dogUrls[i]
        rowDivCols.push(
        <div className='col'> 
          <div className='dog-image square' style={{backgroundImage: `url(${dogUrl})`}} key={dogUrl} onClick={this.onClick}></div>
          <div className='heart-image'>{this.renderHeart(dogUrl)}</div>
        </div>
        )
      }
      for (i = 0; i < blankDivLength; i++) {
        rowDivCols.push(
          <div className='col'>
            <div className='dog-image'></div>
          </div>
        )
      }
      div.push(
        <div className='row'>
          {rowDivCols}
        </div>
      )
    }

    return div
  }

  renderHeart = dogUrl => {
    let icon = this.props.whiteHeartIcon,
        alt = this.props.whiteHeartAlt

    if (this.isInFavorites(dogUrl)) {
      icon = this.props.redHeartIcon
      alt = this.props.redHeartAlt
    }

    return <Heart icon={icon} alt={alt} />
  }

  render() {
    return (
      <div className='container'>
        {this.renderDogs()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    redHeartIcon: state.redHeartIcon,
    redHeartAlt: state.redHeartAlt,
    whiteHeartIcon: state.whiteHeartIcon,
    whiteHeartAlt: state.whiteHeartAlt
  }
}

export default connect(mapStateToProps, { addToFavorites, removeFromFavorites })(Dog)