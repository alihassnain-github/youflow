import { useToast } from "@/context/ToastContext"
import { RiAlertLine, RiCheckboxCircleLine, RiCloseLine, RiErrorWarningLine, RiInformationLine } from "@remixicon/react"

const toastStyles = {
    success: {
        className: "alert-success",
        icon: (
            <RiCheckboxCircleLine size={18} />
        )
    },
    error: {
        className: "bg-error text-error-content",
        icon: (
            <RiErrorWarningLine size={18} />
        )
    },
    warning: {
        className: "bg-warning text-warning-content",
        icon: (
            <RiAlertLine size={18} />
        )
    },
    info: {
        className: "alert-info",
        icon: (
            <RiInformationLine size={18} />
        )
    }
}


export default function ToastContainer() {
    const { toasts, removeToast } = useToast()!

    if (!toasts.length) return null

    return (
        <div className="toast toast-end toast-bottom">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`alert ${toastStyles[toast.type].className} flex justify-between items-center`}
                >
                    <div className="flex items-center gap-2">
                        {toastStyles[toast.type].icon}
                        <span>{toast.message}</span>
                    </div>
                    <button
                        onClick={() => removeToast(toast.id)}
                        className="btn btn-ghost btn-sm btn-circle ml-2"
                    >
                        <RiCloseLine size={18} />
                    </button>
                </div>
            ))}
        </div>
    )
}
