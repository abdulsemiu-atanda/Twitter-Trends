import {TRENDS} from '../actionTypes/tweetConstants'
import {asyncActionNames} from '../util/asyncUtil'

const initialState = {loading: false, error: null, failure: false, trends: [], lastUpdated: null}

const trendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case asyncActionNames(TRENDS).loading:
      return {...state, loading: action.data}
    case asyncActionNames(TRENDS).failure:
      return {...state, loading: false, error: action.data.error, failure: action.data.status}
    case asyncActionNames(TRENDS).success:
      return {...state, trends: action.data[0].trends, lastUpdated: action.data[0].as_of}
    default:
      return state
  }
}

export default trendsReducer
