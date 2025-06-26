import { RiMailLine } from "@remixicon/react";

export default function ForgotPasswordForm() {
    return (
        <div className="w-full max-w-md">

            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-100">

                <form className="flex flex-col gap-4">

                    <h1 className="text-center font-bold text-xl md:text-2xl">Forgot password</h1>

                    <p className="text-sm text-center mb-4">Enter your email address, and we'll give you reset instructions.</p>

                    <label className="input w-full">
                        <RiMailLine className="h-[1em] opacity-50" />
                        <input type="email" placeholder="Email" />
                    </label>

                    <button type="submit" className="btn btn-default btn-block">Confirm</button>

                    <p className="text-center text-sm">
                        <a href="/signin" className="link">Back to Login</a>
                    </p>

                </form>

            </div>
        </div>
    )
}