import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import Heart from './Heart'
import { getFavorites } from '../redux/actions'
import Dog from './Dog'

class Favorites extends Component<any, any> {
  componentDidMount() {
    this.props.getFavorites()
  }

  render() {
    return (
      <Fragment>
        <Title className='pt-4 mb-4'>
          <Heart icon="redHeartIcon" alt="red heart icon" />
          <span className='ml-4'>Favorites</span>
        </Title>
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

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  borderTop: '1px solid #d5d5d5'
})

export default connect(mapStateToProps, { getFavorites })(Favorites)