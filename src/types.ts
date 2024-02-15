export interface IError {
  response: {
		status: number;
	}
}

export interface IResponse {
	data: [];
	status: number;
	statusText: string;
}