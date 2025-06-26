import { RiKey2Line } from "@remixicon/react";

export default function VerifyEmailForm() {
    return (
        <div className="w-full max-w-md">
            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-100">

                <form className="flex flex-col gap-4">

                    <h1 className="text-center font-bold text-xl md:text-2xl">Verify Your Email</h1>

                    <p className="text-sm text-center mb-4">
                        A 6-digit verification code has been sent to your email. <br />
                        Please enter the code below to continue.
                    </p>

                    <label className="input w-full">
                        <RiKey2Line className="h-[1em] opacity-50" />
                        <input type="text" placeholder="Enter 6-digit code" />
                    </label>

                    <button type="submit" className="btn btn-default btn-block">Verify</button>

                    <p className="text-center text-sm">
                        Didn’t receive the code? <a href="#" className="link">Resend</a>
                    </p>

                </form>

            </div>
        </div>
    )
}