import {
  YELP_SEARCH,
  SEARCH_LOADING,
} from './actionTypes';


export const initialState = {
  searchData: [],
  isSearching: false,
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case YELP_SEARCH:
      return {
        ...state,
        searchData: payload,
        isSearching: false,
      }
    case SEARCH_LOADING:
      return {
        ...state,
        isSearching: true,
      }
    default:
      return state
  }
}
