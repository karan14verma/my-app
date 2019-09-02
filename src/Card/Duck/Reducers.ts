import { AnyAction } from 'redux';
import types from './Types';

export type IItemReducerState = {};

const initialState: IItemReducerState = ['1', '2'];

export const items = (state: any, action: AnyAction) => {
	return (action.type === types.ITEMS_FETCH_DATA_SUCCESS)
	? state
	: [];
}

export default function ItemReducer(state: IItemReducerState = initialState, action: AnyAction) {
	if (action.type === types.ITEMS_FETCH_DATA_SUCCESS) {
		return {
			...state,
			...action.items,
		};
	}
	if(action.type === types.ITEMS_POST_DATA_SUCCESS) {
		return{
			...state,
			...action.item
		}
	}

	return state;
}
