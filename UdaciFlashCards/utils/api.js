import { decks } from "./data"
import { AsyncStorage } from "react-native"

const LOCAL_STORAGE_KEY = "UDACI_FLASHCARDS"

export const getInitialData = async () => {
  
    const localStorageDecks = await AsyncStorage.getItem(LOCAL_STORAGE_KEY)

    if (localStorageDecks === null) {
      AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decks))
    }
    return localStorageDecks === null ? decks : JSON.parse(localStorageDecks)
  
}

export const getDeckById = async (id) => {
  const localStorageDecks = await AsyncStorage.getItem(LOCAL_STORAGE_KEY)
  return JSON.parse(localStorageDecks)[id]
}

export const addCardToDeck = async ({ id, question, answer }) => {
  const deck = await getDeckById(id)
  const cardToAdd = {
    question,
    answer,
  }
  await AsyncStorage.mergeItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      [id]: {
        questions: [...deck.questions].concat(cardToAdd),
      },
    })
  )
}

export const createDeck = async (title) => {
  await AsyncStorage.mergeItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  )
}
