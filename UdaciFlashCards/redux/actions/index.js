
import { addCardToDeck, createDeck } from "../../utils/api";

export const GET_DECKS = "GET_DECKS"
export const CREATE_CARD = "CREATE_CARD"
export const CREATE_DECK = "CREATE_DECK"

export const getAllDecks = (decks) => {
  return {
    type: GET_DECKS,
    decks,
  }
}

export const handleCreateCard = ({ id, question, answer }) => {
  return (dispatch) => {
    addCardToDeck({ id, question, answer }).then(() => {
      dispatch({type: CREATE_CARD, id, question, answer})
    })
  }
}


export const handleCreateDeck = (title) => {
  return (dispatch) => {
    createDeck(title).then(() => {
      dispatch({type: CREATE_DECK, title})
    })
  }
}
