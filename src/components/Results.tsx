import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Dog from './Dog'

class Results extends Component<any, any> {
  renderDogUrls = () => {
    const dogUrls = this.props.dogUrls
    const error = this.props.error

    if (!dogUrls && !error) {
      return null
    }

    else if (error) {
      return <Fragment>Invalid dog breed</Fragment>
    }

    else {
      return <Dog dogUrls={dogUrls}/>
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderDogUrls()}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    dogUrls: state.dogUrls,
    error: state.error
  }
}

export default connect(mapStateToProps)(Results)