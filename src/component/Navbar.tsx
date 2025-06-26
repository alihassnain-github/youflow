"use client"

import Sidebar from "./Sidebar";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import UserNav from "./UserNav";

export default function Navbar() {

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="flex gap-4 items-center">
                    <Sidebar />
                    <Link href={"/"} className="md:text-2xl text-xl font-bold">YouFlow</Link>
                </div>
            </div>
            <div className="navbar-center">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="navbar-end">
                <div className="flex gap-4">
                    <ToggleTheme />
                    <UserNav />
                </div>
            </div>
        </div>
    )
}