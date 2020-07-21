import { getQuestions, storeQuestionAnswer, addQuestion } from '../utils/api'


export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export const fetchQuestions = () => async dispatch => {
	const response = await getQuestions()
	dispatch({ type: FETCH_QUESTIONS, questions: response })
}

export const saveQuestionAnswer = (qid, answer) => async (dispatch, getState) => {
	const { authedUser } = getState()
	await storeQuestionAnswer({authedUser, qid, answer})
	dispatch({ type: SAVE_QUESTION_ANSWER, payload: { authedUser, qid, answer }})
}

export const saveQuestion = (optionOneText, optionTwoText) => async (dispatch, getState) => {
	const author = getState().authedUser
	const response = await addQuestion({ optionOneText, optionTwoText, author })
	dispatch({ type: ADD_QUESTION, question: response })
}