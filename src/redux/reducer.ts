import { GET_BREED, ERROR, FAVORITES, HEART_ICON, HEART_ALT } from './types'

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

    case HEART_ICON:
      return {
        ...state,
        heartIcon: action.payload
      }

    case HEART_ALT:
      return {
        ...state,
        heartAlt: action.payload
      }

    default:
      return state
  }
}
