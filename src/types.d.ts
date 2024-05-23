
type ActionResponse<T> = {
    success: boolean;
    result?: T;
    error?: string;
};