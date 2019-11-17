import { GET_BREED, ERROR, FAVORITES, RED_HEART_ICON, RED_HEART_ALT, WHITE_HEART_ICON, WHITE_HEART_ALT } from './types'

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

    case RED_HEART_ICON:
      return {
        ...state,
        redHeartIcon: action.payload
      }

    case RED_HEART_ALT:
      return {
        ...state,
        redHeartAlt: action.payload
      }

    case WHITE_HEART_ICON:
      return {
        ...state,
        whiteHeartIcon: action.payload
      }

    case WHITE_HEART_ALT:
      return {
        ...state,
        whiteHeartAlt: action.payload
      }

    default:
      return state
  }
}
