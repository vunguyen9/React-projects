import { getInitialData } from "../utils/api"
import { getAllDecks } from "./actions"
import { showLoading, hideLoading } from "react-redux-loading"

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then((decks) => {
      dispatch(getAllDecks(decks))
      dispatch(hideLoading())
    })
  }
}

