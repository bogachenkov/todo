import { SET_FILTER } from '../store/constants'

export function filterReducer(state = 'ALL', action) {
	const {type, payload} = action;
	switch (type) {
		case SET_FILTER:
			return payload.filter;
		default:
			return state;
	}
}