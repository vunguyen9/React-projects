import { FETCH_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
	switch(action.type){
		case FETCH_USERS:
			return {
				...state,
				...action.users
			}
		case SAVE_QUESTION_ANSWER:
			const { authedUser, qid, answer } = action.payload
			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			}
		case ADD_QUESTION:
			const question = action.question
			return {
				...state,
				[question.author]: {
					...state[question.author],
					questions: state[question.author].questions.concat([question.id])
				}
			}
		default:
			return state
	}
}