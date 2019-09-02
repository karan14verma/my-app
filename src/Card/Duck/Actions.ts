import { getItems } from '../Services/ApiDataConverter';
import types from './Types';

// Items
export const loadItemsHasErrored = (hasErrored: boolean) => {
	return {
		hasErrored,
		type: types.ITEMS_HAS_ERRORED,
	};
};

export const loadItemsIsLoading = (isLoading: boolean) => {
	return {
		isLoading,
		type: types.ITEMS_IS_LOADING,
	};
};

export const loadItemsSuccess = (data: any) => {
	const items = getItems(data);
	return {
		items,
		type: types.ITEMS_FETCH_DATA_SUCCESS,
	};
};

// Create Item
const createItemIsLoading = (isLoading: boolean) => {
	return {
		isLoading,
		type: types.ITEMS_POST_DATA_IS_LOADING,
	};
};

const createItemSuccess = (item: string) => {
	return {
		item,
		type: types.ITEMS_POST_DATA_SUCCESS,
	};
};

const createItemHasErrored = (hasErrored: boolean) => {
	return {
		hasErrored,
		type: types.ITEMS_POST_DATA_HAS_ERRORED,
	};
};

const createItemInStore = (item: string) => {
	return{
		type: types.ITEM_CREATE_IN_STORE,
		item
	}
}

export default {
    createItemHasErrored,
    createItemIsLoading,
	createItemSuccess,
	createItemInStore,
    loadItemsHasErrored,
	loadItemsIsLoading,
	loadItemsSuccess,
};