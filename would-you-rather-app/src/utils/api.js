import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
  _saveQuestion
} from './_DATA.js'

export function getQuestions () {
	return _getQuestions()
}

export function getUsers () {
	return _getUsers()
}

export function storeQuestionAnswer ({ authedUser, qid, answer }) {
	return _saveQuestionAnswer ({ authedUser, qid, answer })
}

export function addQuestion ({ optionOneText, optionTwoText, author }) {
	return _saveQuestion({ optionOneText, optionTwoText, author })
}