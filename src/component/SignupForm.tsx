"use client"

import { useToast } from "@/context/ToastContext";
import signupAction from "@/lib/actions/signup";
import { RiKey2Line, RiMailLine, RiUser3Line } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignupForm() {

    const [loading, setLoading] = useState(false);

    const { addToast } = useToast()!;

    const route = useRouter();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setLoading(true);

        const response = await signupAction(data);

        if (response.success) {
            route.push('/verify-email');
        } else {
            addToast(response.message, "error", 5000);
        }

        setLoading(false);

    }

    return (
        <div className="w-full max-w-md">

            <div className="border border-base-300 rounded-xl p-6 shadow-sm bg-base-100">

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                    <h1 className="text-center font-bold text-xl md:text-2xl mb-4">Create an account</h1>

                    <label className="input w-full">
                        <RiUser3Line className="h-[1em] opacity-50" />
                        <input type="text" name="username" value={data.username} onChange={handleChange} placeholder="Username" />
                    </label>

                    <label className="input w-full">
                        <RiMailLine className="h-[1em] opacity-50" />
                        <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" />
                    </label>

                    <label className="input w-full">
                        <RiKey2Line className="h-[1em] opacity-50" />
                        <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" />
                    </label>

                    <button type="submit" className="btn btn-default btn-block" disabled={loading}>
                        {loading ? (
                            <>
                                <span className="loading loading-spinner"></span>
                                loading
                            </>
                        ) : (
                            "Create account"
                        )}
                    </button>

                    <div className="divider">OR</div>

                    {/* Google */}
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign up with Google
                    </button>

                    <p className="text-center text-sm">
                        Already have an account? <a href="/signin" className="link">Log in</a>
                    </p>

                </form>

            </div>

        </div>
    );
}
