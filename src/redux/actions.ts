import axios from 'axios'
import { GET_BREED, ERROR, FAVORITES } from './types'

export const searchBreed = breed => async dispatch => {
  try {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    dispatch({
      type: GET_BREED,
      payload: res.data.message
    })
  } catch {
    dispatch({
      type: ERROR,
      payload: 'Invalid Breed'
    })
  }
}

export const getFavorites = () => async dispatch => {
  try {
    const favoriteDogList = JSON.parse(localStorage.getItem('favoriteDogList'))
    
    await
    dispatch({
      type: FAVORITES,
      payload: favoriteDogList
      
    })
  } catch (error) {
    console.log(error)
  }
}

export const addToFavorites = dogUrl => async dispatch => {
  try {
    const favoriteDogList = JSON.parse(localStorage.getItem('favoriteDogList'))
  
    if (!favoriteDogList) {
      localStorage.setItem('favoriteDogList', JSON.stringify([dogUrl]))
    } else {
      favoriteDogList.push(dogUrl)
      localStorage.setItem('favoriteDogList', JSON.stringify(favoriteDogList))
    }

    await
    dispatch({
      type: FAVORITES,
      payload: favoriteDogList
    })
  } catch (error) {
    console.log(error)
  }
}

export const removeFromFavorites = dogUrl => async dispatch => {
  try {
    let favoriteDogList = JSON.parse(localStorage.getItem('favoriteDogList'))
    const dogUrlIndex = favoriteDogList.indexOf(dogUrl)
    
    favoriteDogList.splice(dogUrlIndex, 1)
    localStorage.setItem('favoriteDogList', JSON.stringify(favoriteDogList))

    await
    dispatch({
      type: FAVORITES,
      payload: favoriteDogList
    })
  } catch (error) {
    console.log(error)
  }
}