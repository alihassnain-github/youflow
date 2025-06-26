import { RiKey2Line, RiMailLine } from "@remixicon/react";

export default function SigninForm() {
    return (
        <div className="w-full max-w-md">

            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-100">

                <form className="flex flex-col gap-4">

                    <h1 className="text-center font-bold text-xl md:text-2xl mb-4">Login</h1>

                    <label className="input w-full">
                        <RiMailLine className="h-[1em] opacity-50" />
                        <input type="email" placeholder="Email" />
                    </label>

                    <div>
                        <label className="input w-full">
                            <RiKey2Line className="h-[1em] opacity-50" />
                            <input type="password" placeholder="Password" />
                        </label>

                        <p className="text-end text-sm">
                            <a href="/forgot-password" className="link">forgot password ?</a>
                        </p>
                    </div>

                    <button type="submit" className="btn btn-default btn-block">Login</button>

                    <div className="divider">OR</div>

                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign in with Google
                    </button>

                    <p className="text-center text-sm">
                        Don't have an account? <a href="/signup" className="link">Sign up</a>
                    </p>

                </form>

            </div>
        </div>
    );
}
