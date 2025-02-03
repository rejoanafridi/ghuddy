import { IconError } from './Icon/Icons'

interface ErrorMessageProps {
    message: string
    onRetry?: () => void
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center w-[500px] justify-between bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md max-w-md mx-auto">
                <div className="flex items-center gap-2">
                    <IconError />
                    <span className="text-sm font-medium">{message}</span>
                </div>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="text-sm cursor-pointer bg-red-700 p-1 rounded-md text-white font-semibold"
                    >
                        Retry
                    </button>
                )}
            </div>
        </div>
    )
}

export default ErrorMessage
