import axios from 'axios'
import { GET_BREED, ERROR, FAVORITES, RED_HEART_ICON, RED_HEART_ALT, WHITE_HEART_ICON, WHITE_HEART_ALT } from './types'

export const searchBreed = breed => async dispatch => {
  try {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    dispatch({
      type: GET_BREED,
      payload: res.data.message
    })

    await
    dispatch({
      type: RED_HEART_ICON,
      payload: 'redHeartIcon'
    })

    await
    dispatch({
      type: RED_HEART_ALT,
      payload: 'red heart icon'
    })

    await
    dispatch({
      type: WHITE_HEART_ICON,
      payload: 'whiteHeartIcon'
    })

    await
    dispatch({
      type: WHITE_HEART_ALT,
      payload: 'white heart icon'
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

    await
    dispatch({
      type: RED_HEART_ICON,
      payload: 'redHeartIcon'
    })

    await
    dispatch({
      type: RED_HEART_ALT,
      payload: 'red heart icon'
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