import { RiKey2Line } from "@remixicon/react";

export default function ResetPasswordForm() {
    return (
        <div className="w-full max-w-md">

            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-100">

                <form className="flex flex-col gap-4">

                    <h1 className="text-center font-bold text-xl md:text-2xl">Reset Your Password</h1>

                    <p className="text-sm text-center mb-4">
                    </p>

                    <label className="input w-full">
                        <RiKey2Line className="h-[1em] opacity-50" />
                        <input type="password" placeholder="New password" />
                    </label>

                    <label className="input w-full">
                        <RiKey2Line className="h-[1em] opacity-50" />
                        <input type="password" placeholder="Re-enter new password" />
                    </label>

                    <button type="submit" className="btn btn-default btn-block">Reset password</button>

                </form>

            </div>
        </div>
    );
}
