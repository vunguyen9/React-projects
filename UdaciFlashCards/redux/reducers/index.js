import { GET_DECKS, CREATE_DECK, CREATE_CARD } from "../actions"
import { loadingBarReducer } from "react-redux-loading"
import { combineReducers } from "redux"

const decksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case CREATE_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
        },
      }
    case CREATE_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: [
            ...state[action.id].questions,
            {
              question: action.question,
              answer: action.answer,
            },
          ],
        },
      }

    default:
      return state
  }
}

export default combineReducers({
  decks: decksReducer,
  loadingBar: loadingBarReducer,
})
