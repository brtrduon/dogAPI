import React from 'react'
import styled from '@emotion/styled'

import Header from './Header'
import SearchBar from './SearchBar'
import Results from './Results'
import Favorites from './Favorites'

const App = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Results />
      <Favorites />
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App