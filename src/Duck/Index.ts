import { combineReducers } from 'redux';
import items, { IItemReducerState } from '../Card/Duck/Reducers'

export interface IRootState {
	readonly items: IItemReducerState;
}

export default combineReducers<IRootState>({
	items,
});