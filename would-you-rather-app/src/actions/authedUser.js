export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SIGN_OUT = 'SIGN_OUT'

export function setAuthedUser (userId) {
	return {
		type: SET_AUTHED_USER,
		userId
	}
}

export function signOut() {
	return {
		type: SIGN_OUT
	}
}