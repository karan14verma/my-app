import { combineReducers } from 'redux';
import items from '../Card/Duck/Reducers'

export interface IRootState {
	readonly items: string[];
}

export default combineReducers<IRootState>({
	items,
});