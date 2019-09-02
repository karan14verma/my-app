export interface RequestCallBacks {
	onBegin: () => void;
	onEnd: () => void;
	onSuccess: (data: object) => void;
	onFailure: (error: Error) => void;
}