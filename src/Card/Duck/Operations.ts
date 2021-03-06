import ApiService from '../Services/ApiService';
import actions from './Actions';
import { RequestCallBacks } from 'src/Common/Services/ApiServiceWrapper';

// Load Items
export const loadItems = (service = ApiService) => {

	return (dispatch: any) => {
		const callBacks = {
			onBegin: () => {
				dispatch(actions.loadItemsIsLoading(true));
			},
			onEnd: () => {
				dispatch(actions.loadItemsIsLoading(false));
			},
			onSuccess: (data: object) => {
				dispatch(actions.loadItemsSuccess(data));
			},
			onFailure: (error: Error) => {
				dispatch(actions.loadItemsHasErrored(true));
				// showError(error, content);
			},
		} as any;

		return service.getAllItems(callBacks);
	};
};

// Create Item
export const createItem = (item: string, content?: any, service = ApiService) => {
	return (dispatch: any) => {
		const callBacks = {
			onBegin: () => {
				// dispatch(actions.createItemInStore(item));
				dispatch(actions.createItemIsLoading(true));
			},
			onEnd: () => {
				dispatch(actions.createItemIsLoading(false));
			},
			onSuccess: (data: object) => {
				dispatch(actions.createItemSuccess(item));
			},
			onFailure: (error: Error) => {
				dispatch(actions.createItemHasErrored(true));
				// showError(error, content);
			},
		} as RequestCallBacks;

		dispatch(actions.createItemInStore(item));

		return service.createItem(item, callBacks);
	};
};

