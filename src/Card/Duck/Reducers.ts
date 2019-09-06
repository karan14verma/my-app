import { AnyAction } from 'redux';
import types from './Types';
import ItemCollection from '../../Common/Models/ItemCollection'

// export type IItemReducerState<T> = {
// 	byId: { [id: string]: T };
// 	allIds: string[];
// 	constructor() {
// 		this.byId = {};
// 		this.allIds = [];
// 	}
// };

export type IItemReducerState = ItemCollection<string>;

const initialState: IItemReducerState = {
	byId: {},
	allIds: [],
}

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
	if(action.type === types.ITEM_CREATE_IN_STORE) {
		return{
			...state,
			byId: { ...state.byId, [action.item]: action.item},
			allIds: state.allIds.concat(action.item),
		}
	}

	return state;
}
