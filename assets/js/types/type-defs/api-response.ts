export interface ApiResponse {
	body: Record< string, unknown >;
	headers: Headers;
	status: number;
	ok: boolean;
	json: () => Promise< unknown >;
}

export function assertBatchResponseIsValid(
	response: unknown
): asserts response is {
	responses: ApiResponse[];
	headers: Headers;
} {
	if (
		typeof response === 'object' &&
		response !== null &&
		response.hasOwnProperty( 'responses' )
	) {
		return;
	}
	throw new Error( 'Response not valid' );
}

export function assertResponseIsValid(
	response: unknown
): asserts response is ApiResponse {
	if (
		typeof response === 'object' &&
		response !== null &&
		response.hasOwnProperty( 'body' ) &&
		response.hasOwnProperty( 'headers' )
	) {
		return;
	}
	throw new Error( 'Response not valid' );
}
