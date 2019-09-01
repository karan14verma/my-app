export const getItems = (data: any): string[] => {
	const items = [];
	for (const key of Object.keys(data)) {
		items.push(key);
	}
	return items;
};
