import React from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

const Heart  = ({ icon, alt }) => {
  return <HeartIcon src={icons[icon]} alt={alt} className={alt} />
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

export default Heart