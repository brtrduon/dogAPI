import { GET_BREED, ERROR, FAVORITES } from './types'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BREED:
      return {
        ...state,
        dogUrls: action.payload,
        error: null
      }

    case ERROR:
      return {
        ...state,
        dogUrls: null,
        error: action.payload
      }

    case FAVORITES:
      return {
        ...state,
        favoriteDogUrls: action.payload
      }

    default:
      return state
  }
}
