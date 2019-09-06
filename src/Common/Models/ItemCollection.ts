export default abstract class IItemReducerState<T> {
	byId: { [id: string]: T };
	allIds: string[];
	constructor() {
		this.byId = {};
		this.allIds = [];
	}
};