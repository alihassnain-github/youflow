"use client";

import { useToast } from "@/context/ToastContext";
import { app } from "@/firebase/config";
import { getAuth, signOut } from "firebase/auth";

export default function UserNav() {

    const { addToast } = useToast()!;

    async function handleClick() {
        try {
            const auth = getAuth(app);
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
            addToast("Sign out failed. Please try again.", "error", 5000);
        }
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li className="mb-2">
                    <div className="px-2 flex items-start gap-0 flex-col">
                        <p className="font-bold text-sm">Ali Murtaza</p>
                        <p className="text-xs text-gray-500 truncate">alimurtaza32721@gmail.com</p>
                    </div>
                </li>
                <li><a onClick={handleClick}>Logout</a></li>
            </ul>
        </div>
    )
}