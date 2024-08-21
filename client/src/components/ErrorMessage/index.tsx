
type ErrorMessageProps = {
    message?: string;
};

function ErrorMessage({ message }: ErrorMessageProps ){
    if (!message) return null; // Don't render anything if there's no message
    return <span className="text-red-600 font-bold flex justify-center my-1">{message}</span>;
};

export default ErrorMessage;