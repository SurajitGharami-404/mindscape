export default function getErrorMessage(error: unknown) {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error instanceof Object && "message" in error) {
        message = error.message as string;
    } else if (error instanceof String) {
        message = error as string;
    } else {
        message = "Something went wrong";
    }

    return message;
}
