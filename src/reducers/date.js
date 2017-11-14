import moment from 'moment';
import 'moment/locale/ru';
import { SET_DATE } from '../store/constants'
moment.locale('ru');

const TODAY = moment().format('DD MMMM Y');

export function dateReducer(state = TODAY, action) {
	switch (action.type) {
		case SET_DATE:
			return action.payload.date;
		default:
			return state;
	}
}
