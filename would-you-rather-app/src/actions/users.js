import { getUsers } from '../utils/api'

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async dispatch => {
	const response = await getUsers();
	dispatch({ type: FETCH_USERS, users: response })
}  