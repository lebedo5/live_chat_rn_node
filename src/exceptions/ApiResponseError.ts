class ErrorOptions {}

export class ApiResponseError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
        // @ts-ignore
        super(message, options);
    }
}
