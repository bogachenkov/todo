import {ADD_TODO} from "../constants";

export const idGenerator = store => next => action => {
	if (action.type !== ADD_TODO) return next(action);
	next({
		...action,
			id: Date.now(),
	})
};