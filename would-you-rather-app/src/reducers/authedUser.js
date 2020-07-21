import { SET_AUTHED_USER, SIGN_OUT } from '../actions/authedUser'

export default function authedUser (state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.userId
		case SIGN_OUT:
			return null
		default:
			return state
	}
}